myApp.factory('DataFactory', ['$http', function($http) {

  // PRIVATE

  var event = undefined;
  var contacts = undefined;
  var students = undefined;
  var cohorts = undefined;
  var schedules = undefined;
  var schedule = undefined;
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
    //console.log('In the factory. Getting the contacts');
    var promise = $http.get('/data/contacts').then(function(response) {
      contacts = response.data;
      //console.log('Got the contacts. They are:');
      //console.log(contacts);
    });
    return promise;
  };

  var privateGetAllStudents = function() {
    var promise = $http.get('/data/students').then(function(response) {
      students = response.data;
    });
    return promise;
  };

  var privateGetSchedules = function(event) {
    // should this just get the schedules from a particular cohort, or for an event?
    var promise = $http.get('/data/schedule/' + event.id).then(function(response) {
      schedule = response.data;
    });
    return promise;
  };

  var privateGetStudentsFromCurrentCohort = function() {
    var promise = $http.get('/data/students/' + currentCohort).then(function(response) {
      studentsFromCurrentCohort = response.data;
    });
    return promise;
  };

  var privateSetCurrentCohort = function(cohort) {
    currentCohort = cohort;
  };

  var privateSubmitCohort = function(cohort) {
    var promise = $http.put('/data/cohort', cohort).then(function(response) {
      // I need to make sure that the server is sending back all of the cohorts
      cohorts = response.data;
    });
    return promise;
  };

  var privateSubmitEvent = function(event) {
    var promise = $http.put('/data/event', event).then(function(response) {
      event = response.data;
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
    currentCohort: function() {
      return currentCohort;
    },
    getCurrentSchedule: function() {
      return currentSchedule;
    },
    getSchedules: function() {
      return privateGetSchedules();
    },
    getStudentsFromCurrentCohort: function() {
      return privateGetStudentsFromCurrentCohort();
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
    setCurrentCohort: function(cohort) {
      return privateSetCurrentCohort(cohort);
    },
    studentsArray: function() {
      return students;
    },
    studentsFromCurrentCohort: function() {
      return studentsFromCurrentCohort;
    },
    submitCohort: function(cohort) {
      return privateSubmitCohort(cohort);
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