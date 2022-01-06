import { Command } from 'commander';
import chalk from 'chalk';
import * as path from 'path';
import { initCLI } from './utils/init-cli';
import { generateThemeTypings, themeInterfaceDestination } from './command';

export async function run() {
  await initCLI();

  const program = new Command();
  program
    .command('tokens <source>')
    .description('enter the theme file path.')
    .option(
      '-out | --out <path>',
      `output file e.g. ${path.join(...themeInterfaceDestination)}`
    )
    .option(
      '-sct | --strict-component-types',
      'generate strict type for props variant and size'
    )
    .action(async (source: string, options) => {
      const themeFile = source;
      const { out, strictComponentTypes } = options;
      await generateThemeTypings({ themeFile, out, strictComponentTypes });
    });

  program.helpOption('-help | --help');

  program.on('-help', () => {
    console.info(
      chalk.greenBright(`\nExample call: $ wallace-cli tokens theme.ts\n`)
    );
  });
  program.on('--help', () => {
    console.info(
      chalk.greenBright(`\nExample call: $ wallace-cli tokens theme.ts\n`)
    );
  });

  program.parse();
}
