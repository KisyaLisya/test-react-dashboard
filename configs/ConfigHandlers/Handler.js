
const fs = require('fs');
const Logger = require('./Logger.js');

module.exports = class Handler {

  constructor(mainFolder) {
    this.mainFolder = mainFolder ? mainFolder : '/data';
    this.logger = new Logger('DataBase');
  }

  init(data) {
    const fileData = {
      tasks: {
        ...data
      }
    };
    const loggerCallback = this.logger.log.bind(this.logger, 'SuccessfullyDictionary configured')
    this.writeFile('/tasks.json', fileData, loggerCallback);
  }

  makePathToFile(path) {
    return __dirname + this.mainFolder + path;
  }

  writeFile(path, fileData, callback) {
    const data = JSON.stringify(fileData);
    const fullPath = this.makePathToFile(path);
    fs.writeFile(fullPath, data, (err) => {
      if (err) {
        this.logger.error(`Error in writing file,\n path [${fullPath}]`, err);
      } else {
        this.logger.log(`Saved,\n path [${fullPath}]`);
        callback && callback();
      }
    })
  }

}