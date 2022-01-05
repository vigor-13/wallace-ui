import checkNode from 'cli-check-node';
import unhandledError from 'cli-handle-unhandled';
import welcome from 'cli-welcome';
import UpdateNotifier from 'update-notifier';
import chalk from 'chalk';
import packageJSON from '../../package.json';

const ASCII_ART =
  "                     ___    ___                                                  \r\n                    /\\_ \\  /\\_ \\                                           __    \r\n __  __  __     __  \\//\\ \\ \\//\\ \\      __      ___     __           __  __/\\_\\   \r\n/\\ \\/\\ \\/\\ \\  /'__`\\  \\ \\ \\  \\ \\ \\   /'__`\\   /'___\\ /'__`\\ _______/\\ \\/\\ \\/\\ \\  \r\n\\ \\ \\_/ \\_/ \\/\\ \\L\\.\\_ \\_\\ \\_ \\_\\ \\_/\\ \\L\\.\\_/\\ \\__//\\  __//\\______\\ \\ \\_\\ \\ \\ \\ \r\n \\ \\___x___/'\\ \\__/.\\_\\/\\____\\/\\____\\ \\__/.\\_\\ \\____\\ \\____\\/______/\\ \\____/\\ \\_\\\r\n  \\/__//__/   \\/__/\\/_/\\/____/\\/____/\\/__/\\/_/\\/____/\\/____/         \\/___/  \\/_/";

export async function initCLI() {
  checkNode(`12`);
  await unhandledError();

  console.log(chalk.blue(ASCII_ART));

  welcome({
    title: 'Wallace UI CLI',
    tagLine: `by wallace-ui\n${packageJSON.description}`,
    bgColor: `#FFA300`,
    color: `#ffffff`,
    bold: true,
    clear: false,
    version: packageJSON.version,
  });

  UpdateNotifier({
    pkg: packageJSON,
    shouldNotifyInNpmScript: true,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3, //3 days
  }).notify({ isGlobal: true });
}
