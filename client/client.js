// Imports
var app = angular.module('ticketApp', []);

// Init angular controllers
app.controller('MainController', ['$http', function($http) {
  var controller = this;

  // Init controller variables
  controller.ticketList = [];
  controller.ticket = {};
  controller.showForm = false;

  // Init controller functions
  controller.toggleShowForm = function() {
    if (controller.showForm) {
      controller.showForm = false;
    } else {
      controller.showForm = true;
    }
  }

  controller.getTickets = function() {
    controller.ticket = {};
    $http.get('/tickets/getAll').then(function(response) {
      controller.ticketList = response.data;
      controller.ticketList.forEach(function(listItem) {
        var dateFormat = 'MM/DD/YY h:mm a';
        listItem.createdDisplay = moment(listItem.created).format(dateFormat);
        listItem.updatedDisplay = moment(listItem.updated).format(dateFormat);
      });
      // controller.ticketList.sort(function(a, b) {
      //   var priorityA = a.priority;
      //   console.log('A', a.name, a.priority);
      //   var priorityB = b.priority;
      //   console.log('B', b.name, b.priority);
      //
      //   if (priorityA < priorityB) {
      //     console.log('B is greater');
      //     return -1;
      //
      //   } else if (priorityA > priorityB) {
      //     console.log('A is greater');
      //     return 1;
      //
      //   } else {
      //     console.log('They are equal');
      //     return 0;
      //   }
      // }
    });
  }

  controller.addTicket = function() {
    controller.toggleShowForm();
    $http.post('/tickets/add', controller.ticket).then(controller.getTickets());
  }

  controller.removeTicket = function(ticket) {
    $http.delete('/tickets/delete/' + ticket._id).then(controller.getTickets());
  }

  controller.editTicket = function(ticket) {
    // TODO: Code this function!
    // $http.post('/tickets/edit', ticket["_id"]).then(controller.getTickets());
  }

  controller.getTickets();
}]);
