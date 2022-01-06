import ora from 'ora';
import chalk from 'chalk';
import { themeInterfaceDestination } from './resolve-output-path';

export { themeInterfaceDestination };

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

interface GenerateThemeTypingsProps {
  themeFile: string;
  out: string;
  strictComponentTypes?: boolean;
}

export async function generateThemeTypings(props: GenerateThemeTypingsProps) {
  const { themeFile, out, strictComponentTypes } = props;
  const spinner = ora('Generating wallace-ui theme typings').start();
  try {
    /*
     * 템플릿 및 출력 경로 생성
     */
    const template = await sleep(5000);
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
