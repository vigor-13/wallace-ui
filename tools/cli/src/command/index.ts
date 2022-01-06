import ora from 'ora';
import chalk from 'chalk';
import path from 'path';
import { fork, Serializable } from 'child_process';
import { themeInterfaceDestination } from './resolve-output-path';
export { themeInterfaceDestination };

type ErrorRecord = Record<'err', string>;

interface GenerateThemeTypingsProps {
  themeFile: string;
  out: string;
  strictComponentTypes?: boolean;
}

interface RunTemplateWorkerProps {
  themeFile: string;
  strictComponentTypes?: boolean;
}

async function runTemplateWorker(props: RunTemplateWorkerProps): Promise<string> {
  const { themeFile, strictComponentTypes } = props;
  console.log(' runTemplateWorker()');

  /*
   * childprocess에 worker 생성
   */
  const worker = fork(
    path.join(__dirname, '..', 'scripts', 'read-theme-file.worker.js'), // 경로
    [themeFile].concat(strictComponentTypes ? '--strict-component-types' : []), // 인자
    {
      // 옵션
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      cwd: process.cwd(),
    }
  );

  return new Promise((resolve, reject) => {
    worker.on('message', (message: ErrorRecord | Serializable) => {
      const errMessage = (message as ErrorRecord)?.err;

      if (errMessage) reject(new Error(errMessage));
      console.log(` message from worker: ${message}`);
      return resolve(String(message));
    });

    worker.on('error', reject);
  });
}

export async function generateThemeTypings(props: GenerateThemeTypingsProps) {
  const { themeFile, out, strictComponentTypes } = props;
  const spinner = ora('Generating wallace-ui theme typings').start();
  try {
    /*
     * 템플릿 및 출력 경로 생성
     */
    const template = await runTemplateWorker({ themeFile, strictComponentTypes });
    const outPath = '';

    /*
     * 파일 생성
     */
    spinner.text = `Write file ...`;
    spinner.info();
    spinner.succeed('Done');
  } catch (error) {
    spinner.fail('An error occurred');
    if (error instanceof Error) console.error(chalk.redBright(error.message));
  } finally {
    spinner.stop();
  }
}
