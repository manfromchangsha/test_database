/*
CODE SKELETON SOURCED FROM https://github.com/bradtraversy/react_express_starter, https://www.youtube.com/watch?v=v0t42xBIYIs
https://www.youtube.com/watch?v=HPIjjFGYSJ4
*/

const express = require('express');
const app = express();
var mysql = require('mysql');

var myConnection = require('express-myconnection');

var config = require('./config');

var dbOptions = {
 host: config.database.host,
 user: config.database.user,
 password: config.database.password,
 port: config.database.port,
 database: config.database.db
}

app.use(myConnection(mysql, dbOptions, 'pool'));
var expressValidator = require('express-validator')
app.use(expressValidator())
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(flash())

app.get('/', (req, res) => {
  res.send('go to /products to see products')
});

var test = require('./routes/test')

app.use('/', test)

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
