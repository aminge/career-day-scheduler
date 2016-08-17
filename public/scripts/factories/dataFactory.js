myApp.factory('DataFactory', ['$http', function($http) {

  // PRIVATE

  var recruiters = undefined;
  var students = undefined;
  var schedules = undefined;
  var currentSchedule = undefined;
  var currentCohort = undefined;
  var studentsFromCurrentCohort = undefined;

  var privateGetAllRecruiters = function() {
    var promise = $http.get('/data/recruiters').then(function(response) {
      recruiters = response.data;
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
  var privateSubmitStudent = function(student) {
    var promise = $http.put('/data/student', student).then(function(response) {
      // make sure to send back all of the students from the server
      students = response.data;
    });
    return promise;
  };
  var privateSubmitRecruiter = function(recruiter) {
    var promise = $http.put('/data/recruiter', recruiter).then(function(response) {
      // make sure to send back all of the recruiters from the server
      recruiters = response.data;
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
    publicGetAllRecruiters: function() {
      return privateGetAllRecruiters()
    },
    publicGetAllStudents: function() {
      return privateGetAllStudents();
    },
    publicGetCurrentSchedule: function() {
      return currentSchedule;
    },
    publicGetSchedules: function() {
      return privateGetSchedules();
    },
    publicGetStudentsFromCohort: function(cohort) {
      return privateGetStudentsFromCohort(cohort);
    },
    publicRecruitersArray: function() {
      return recruiters;
    },
    publicSchedulesArray: function() {
      return schedules;
    },
    publicSetCurrentSchedule: function(schedule) {
      return privateSetCurrentSchedule(schedule);
    },
    publicSubmitRecruiter: function(recruiter) {
      return privateSubmitRecruiter(recruiter);
    },
    publicSaveSchedule: function(schedule) {
      return privateSaveSchedule(schedule);
    },
    publicStudentsArray: function() {
      return students;
    },
    publicSubmitStudent: function(student) {
      return privateSubmitStudent(student);
    }
  };

  return publicAPI;
}]);