// Import required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var ticketsRouter = require('./routes/tickets');

// Init express application
var app = express();

// Set up Mongo
var mongoUri = 'mongodb://localhost/ticketDb';
var MongoDB = mongoose.connect(mongoUri).connection;

// Establish connection to Mongo
MongoDB.on('error', function(err) {
  console.log('MongoDB connection error:', err);
})

MongoDB.once('open', function() {
  console.log('MongoDB connection open.');
})

// Middleware
app.use(express.static('server/public'));
app.use(bodyParser.json()); // Thanks, Suzanna! I owe you lunch.
app.use('/', indexRouter);
app.use('/tickets', ticketsRouter);

// Start server
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port, '. Control + C to exit.');
});
