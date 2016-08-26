myApp.factory('DataFactory', ['$http', function($http) {

  // PRIVATE

  var events = undefined;
  var contacts = undefined;
  var students = undefined;
  var cohorts = undefined;
  var schedules = undefined;
  var currentSchedule = undefined;
  var currentCohort = undefined;
  var studentsFromCurrentCohort = undefined;

  var privateGetAllCohorts = function() {
    var promise = $http.get('/data/cohorts').then(function(response) {
      cohorts = response.data;
    });
    return promise;
  };

  var privateGetAllContacts = function() {
    console.log('In the factory. Getting the contacts');
    var promise = $http.get('/data/contacts').then(function(response) {
      contacts = response.data;
      console.log('Got the contacts. They are:');
      console.log(contacts);
    });
    return promise;
  };

  var privateGetAllStudents = function() {
    var promise = $http.get('/data/students').then(function(response) {
      students = response.data;
    });
    return promise;
  };

  var privateGetSchedules = function() {
    // should this just get the schedules from a particular cohort?
  };

  var privateGetStudentsFromCohort = function(cohort) {

  };

  var privateSubmitEvent = function(event) {
    var promise = $http.put('/data/event', event).then(function(response) {
      events = response.data;
    });
    return promise;
  };

  var privateSubmitStudent = function(student) {
    var promise = $http.put('/data/student', student).then(function(response) {
      // make sure to send back all of the students from the server
      students = response.data;
    });
    return promise;
  };

  var privateSubmitContact = function(contact) {
    console.log('In the data factory');
    var promise = $http.put('/data/contact', contact).then(function(response) {
      // make sure to send back all of the contacts from the server
      contacts = response.data;
      console.log('Got the response back in the data factory. It is:', contacts);
    });
    return promise;
  };

  var privateSaveSchedule = function(schedule) {
    var promise = $http.put('/data/schedule', schedule).then(function(response) {
      // make sure to send back all of the contacts from the server
      schedules = response.data;
    });
    return promise;
  };

  var privateSetCurrentSchedule = function(schedule) {
    currentSchedule = schedule;
  };


  // PUBLIC

  var publicAPI = {
    getAllCohorts: function() {
      return privateGetAllCohorts();
    },
    getAllContacts: function() {
      return privateGetAllContacts()
    },
    getAllStudents: function() {
      return privateGetAllStudents();
    },
    cohortsArray: function() {
      return cohorts;
    },
    getCurrentSchedule: function() {
      return currentSchedule;
    },
    getSchedules: function() {
      return privateGetSchedules();
    },
    getStudentsFromCohort: function(cohort) {
      return privateGetStudentsFromCohort(cohort);
    },
    contactsArray: function() {
      return contacts;
    },
    schedulesArray: function() {
      return schedules;
    },
    setCurrentSchedule: function(schedule) {
      return privateSetCurrentSchedule(schedule);
    },
    saveSchedule: function(schedule) {
      return privateSaveSchedule(schedule);
    },
    studentsArray: function() {
      return students;
    },
    submitEvent: function(event) {
      return privateSubmitEvent(event);
    },
    submitContact: function(contact) {
      return privateSubmitContact(contact);
    },
    submitStudent: function(student) {
      return privateSubmitStudent(student);
    }
  };

  return publicAPI;
}]);