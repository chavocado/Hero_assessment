var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// modules
var heroes = require('./routes/heroes');
var index = require('./routes/index');
var list = require('./routes/lists');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve back static files
app.use(express.static(path.join(__dirname, './public')));


// express routes
// app.use('/views/list.html', list);
app.use('/lists', list);
// app.use('/views/heroes.html', heroes);
app.use('/heroes', heroes);
app.use('/', index);

// mongoose connection
var databaseURI = 'mongodb://localhost:27017/mu';

mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

// start server
app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
