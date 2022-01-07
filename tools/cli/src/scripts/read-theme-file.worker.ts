import path from 'path';
import fs from 'fs';
import * as tsNode from 'ts-node';
import * as tsConfigPaths from 'tsconfig-paths';
import { isObject } from '@wallace-ui/utils';

const bold = (text: string) => `\x1b[1m${text}\x1b[22m`;

async function importTheme(path: string) {
  const module = await import(path);
  const theme = module.default ?? module.theme;

  if (!theme)
    throw new Error(`
    Theme export not found in module: '${path}'

    A theme shoudl have a ${bold('default')} export or a ${bold(
      'theme'
    )} named export.
  `);

  return theme;
}

async function readTheme(themeFilePath: string) {
  /*
   * theme 파일 경로
   */
  const cwd = process.cwd(); // 현재 작업 디렉토리 반환
  const absoluteThemePath = path.join(cwd, themeFilePath);
  const absoluteThemeDir = path.dirname(absoluteThemePath);

  /*
   * tsConfig 파일 탐색
   */
  const tsConfig = tsConfigPaths.loadConfig(absoluteThemeDir);
  if (tsConfig.resultType === 'success') {
    /*
     * TS 프로젝트인 경우 해당 tsconfig 사용
     */
    tsNode.register({
      project: tsConfig.configFileAbsolutePath,
      compilerOptions: {
        module: 'CommonJS',
      },
    });

    // *TODO: module alias replace 기능 미구현...
  } else {
    /*
     * JS 프로젝트인 경우 디폴트 설정 사용
     */
    const defaultProject = path.join(__dirname, '..', '..', 'bin', 'tsconfig.json');
    tsNode.register({
      project: defaultProject,
    });
  }

  //
  try {
    /*
     * 경로에 theme 파일이 존재하는지 확인
        - REF: https://stackoverflow.com/questions/54514627/nodejs-fs-stat-or-fs-access-to-check-if-a-folder-exists
     */
    await fs.promises.stat(absoluteThemePath);
    return importTheme(absoluteThemePath);
  } catch (statError) {
    try {
      return importTheme(require.resolve(themeFilePath, { paths: [cwd] }));
    } catch (resolveError) {
      throw new Error(
        `Theme file or package not found \n ${statError} \n${resolveError}`
      );
    }
  }
}

/**
 * Reads the theme file, generates the typings interface and prints it to stdout
 */
async function run() {
  const themeFile = process.argv[2];
  const strictComponentTypes = process.argv.includes('--strict-component-types');

  if (!themeFile) {
    throw new Error('No path to theme file provided.');
  }

  const theme = await readTheme(themeFile);
  if (!isObject(theme)) {
    throw new Error('Theme not found in default or named `theme` export');
  }
}

run().catch((e) => {
  if (process.send) {
    process.send({ err: e.toString() });
  } else {
    process.stderr.write(e.message);
  }

  process.exit(1);
});
