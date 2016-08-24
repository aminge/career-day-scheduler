myApp.factory('DataFactory', ['$http', function($http) {

  // PRIVATE

  var events = undefined;
  var recruiters = undefined;
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

  var privateGetAllRecruiters = function() {
    console.log('In the factory. Getting the recuiters');
    var promise = $http.get('/data/recruiters').then(function(response) {
      recruiters = response.data;
      console.log('Got the recruiters. They are:');
      console.log(recruiters);
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

  var privateSubmitRecruiter = function(recruiter) {
    console.log('In the data factory');
    var promise = $http.put('/data/recruiter', recruiter).then(function(response) {
      // make sure to send back all of the recruiters from the server
      recruiters = response.data;
      console.log('Got the response back in the data factory. It is:', recruiters);
    });
    return promise;
  };

  var privateSaveSchedule = function(schedule) {
    var promise = $http.put('/data/schedule', schedule).then(function(response) {
      // make sure to send back all of the recruiters from the server
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
    getAllRecruiters: function() {
      return privateGetAllRecruiters()
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
    recruitersArray: function() {
      return recruiters;
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
    submitRecruiter: function(recruiter) {
      return privateSubmitRecruiter(recruiter);
    },
    submitStudent: function(student) {
      return privateSubmitStudent(student);
    }
  };

  return publicAPI;
}]);