const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));
app.use('/api', jsonServer.router('./data/db.json'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(port);
