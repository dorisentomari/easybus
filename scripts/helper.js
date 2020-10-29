const chalk = require('chalk');

const redFont = chalk.red;
const greenFont = chalk.green;
const redBg = chalk.bgRedBright.whiteBright;
const greenBg = chalk.bgGreenBright.whiteBright;

function logRedBg(title, content) {
  console.log(`${redBg(title)} ${redFont(content)}`);
}

function logGreen(title, content) {
  console.log(`${greenBg(title)} ${greenFont(content)}`);
}

module.exports = {
  redFont,
  greenFont,
  redBg,
  greenBg,
  logRedBg,
  logGreen
};
