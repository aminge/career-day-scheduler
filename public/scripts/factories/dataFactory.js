myApp.factory('DataFactory', ['$http', function($http) {

  // PRIVATE

  var recruiters = undefined;
  var students = undefined;
  var schedules = undefined;
  var currentSchedule = undefined;

  var privateGetAllRecruiters = function() {

  };
  var privateGetAllStudents = function() {

  };
  var privateGetSchedules = function() {

  };
  var privateGetStudentsFromCohort = function(cohort) {

  };
  var privateSubmitStudent = function(student) {

  };
  var privateSubmitRecruiter = function(recruiter) {

  };
  var privateSaveSchedule = function(schedule) {

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
      return privateGetStudentsFromCohort(cohort)
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