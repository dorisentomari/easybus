const Task = require('./task');
const helper = require('./helper');
const task = new Task();

module.exports = {
  inputFiles: ['./src'],
  mode: 'modules',
  out: 'docs',
  exclude: '**/**/__tests__/**/*',
  theme: 'minimal',
  readme: './README.md',
  gitRemote: 'https://github.com/weizhiqimail/easybus.git',
  toc: ['EntryClass', 'ImportantInterface'],
  logger: () => {
    helper.greenFont('开始执行 typedoc logger');
    task.generateTypeDocConfigYml();
  }
};