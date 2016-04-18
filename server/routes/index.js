// Imports
var express = require('express');
var path = require('path');

// Init router
var router = express.Router();

// Establish route
router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

// Export
module.exports = router;
