const Handler = require('./ConfigHandlers/Handler.js');
const data = require('./config.js');

const deployer = new Handler('/../../data');

deployer.init(data);
