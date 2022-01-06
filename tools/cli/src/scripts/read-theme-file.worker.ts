import path from 'path';
import * as tsNode from 'ts-node';
import * as tsConfigPaths from 'tsconfig-paths';

async function readTheme(themeFilePath: string) {
  /*
   * theme 파일 경로
   */
  const cwd = process.cwd(); // 현재 작업 디렉토리 반환
  const absoluteThemePath = path.join(cwd, themeFilePath);
  const absoluteThemeDir = path.dirname(absoluteThemePath);

  /*
   * tsConfig 파일 경로
   */
  const tsConfig = tsConfigPaths.loadConfig(absoluteThemeDir);
  if (tsConfig.resultType === 'success') {
    tsNode.register({
      // use the TS projects own tsconfig file
      project: tsConfig.configFileAbsolutePath,
      compilerOptions: {
        module: 'CommonJS',
      },
    });

    /**
     *
     */
    const aliases = Object.keys(tsConfig.paths).reduce((acc, tsAlias) => {
      return acc;
    }, {});
  } else {
  }

  //
  try {
    (<any>process).send(absoluteThemeDir);
  } catch (error) {}
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
}

run().catch((e) => {
  if (process.send) {
    process.send({ err: e.toString() });
  } else {
    process.stderr.write(e.message);
  }

  process.exit(1);
});
