const fs = require('fs');
const path = require('path');
const helper = require('./helper');

class Task {
  init() {
    this.generateTypeDocConfigYml();
  }

  generateTypeDocConfigYml() {
    const content = 'theme: jekyll-theme-cayman\ninclude:\n  - "_*_.html"\n  - "_*_.*.html"';
    const filePath = path.resolve(__dirname, '../docs/_config.yml');
    const dirPath = path.resolve(__dirname, '../docs');
    try {
      if (helper.fsExistsSync(dirPath)) {
        if (!helper.fsExistsSync(filePath)) {
          helper.writeFileSync(filePath, content);
        }
      } else {
        fs.mkdirSync(dirPath);
        helper.writeFileSync(filePath, content);
      }
      helper.greenFont('写入 docs/_config.yml 成功');
    } catch (error) {
      helper.redFont('写入 docs/_config.yml 失败');
      console.log(error);
    }
  }
}

const task = new Task();
task.init();
