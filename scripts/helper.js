const chalk = require('chalk');

function logRedBg(title, content) {
  console.log(`${redBg(title)} ${redFont(content)}`);
}

function logGreen(title, content) {
  console.log(`${greenBg(title)} ${greenFont(content)}`);
}

function redBg(content) {
  console.log(`${chalk.bgRedBright.whiteBright(content)}`);
}

function greenBg(content) {
  console.log(`${chalk.bgGreenBright.whiteBright(content)}`);
}

function redFont(content) {
  console.log(`${chalk.red(content)}`);
}

function greenFont(content) {
  console.log(`${chalk.green(content)}`);
}

module.exports = {
  redFont,
  greenFont,
  redBg,
  greenBg,
  logRedBg,
  logGreen
};
