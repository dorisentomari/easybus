const fs = require('fs');
const path = require('path');
const helper = require('./helper');

class Task {
  generateTypeDocConfigYml() {
    const content = `theme: jekyll-theme-cayman\ninclude:\n\t- "_*_.html"\n\t- "_*_.*.html"`;
    try {
      fs.writeFileSync(path.resolve(__dirname, '../docs/_config.yml'), content, {encoding: 'utf-8'});
      helper.greenBg('写入 docs/_config.yml 成功');
    } catch (error) {
      helper.redBg('写入 docs/_config.yml 失败');
      console.log(error);
    }
  }
}

module.exports = Task;
