
const fs = require('fs');
const Logger = require('./Logger.js');

module.exports = class Handler {

  constructor(mainFolder) {
    this.mainFolder = mainFolder ? mainFolder : '/data';
    this.logger = new Logger('DataBase');
  }

  init(taskData, usersData) {
    this.makeUsers(usersData);
    this.makeTasks(taskData);
  }

  makeUsers(data) {
    const fileData = {
      users: {
        ...data
      }
    }
    this.writeFile('/users.json', fileData);
  }

  makeTasks(data) {
    const fileData = {
      tasks: {
        ...data
      }
    };
    this.writeFile('/tasks.json', fileData);

    data.forEach((el) => {
      const { id, ...options } = el;
      const path = `/tasks/${id}.json`;
      this.writeFile(path, {
        id: id,
        task: {
          ...options
        }
      });
    })
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
