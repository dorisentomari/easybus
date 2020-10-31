const path = require('path');

module.exports = {
  inputFiles: ['./src'],
  mode: 'modules',
  out: path.resolve(__dirname, '../docs'),
  exclude: '**/**/__tests__/**/*',
  theme: 'minimal',
  readme: './README.md',
  gitRemote: 'https://github.com/weizhiqimail/easybus.git',
  toc: ['EntryClass', 'ImportantInterface'],
};
