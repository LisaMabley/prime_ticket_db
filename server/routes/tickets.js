// Imports
var express = require('express');
var path = require('path');
var Ticket = require('../../models/ticket');

var router = express.Router();

// Establish routes
router.get('/getAll', function(request,response) {
  Ticket.find({}, function(err, tickets) {
    if(err) {
      console.log(err);
      response.sendStatus(500);

    } else {
      response.send(tickets);
    }
  })
})

router.post('/add', function(request, response) {

  // Create new ticket object
  var newTicket = new Ticket({
    name: request.body.name,
    type: request.body.type,
    priority: request.body.priority,
    description: request.body.description,
    reporter: request.body.reporter,
  });

  newTicket.save(function(err) {
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Ticket saved');
      response.sendStatus(200);
    }
  })
});

router.delete('/delete/:id', function(request, response) {
  Ticket.findByIdAndRemove(request.params.id, function(err) {
    if(err) {
      console.log(err);

    } else {
      response.sendStatus(200);
    }
  })
})

// Export
module.exports = router;
