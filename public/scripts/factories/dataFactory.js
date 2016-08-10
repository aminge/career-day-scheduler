myApp.factory('DataFactory', ['$http', function($http) {

  // PRIVATE

  var recruiters = privateGetRecruiters();
  var students = privateGetStudents();

  var privateGetAllRecruiters = function() {

  };
  var privateGetAllStudents = function() {

  };
  var privateGetStudentsFromCohort = function(cohort) {

  };
  var privateSubmitStudent = function(student) {

  };
  var privateSubmitRecruiter = function(recruiter) {

  };
  var privateSaveSchedule = function(schedule) {

  };


  // PUBLIC

  var publicAPI = {
    publicGetAllRecruiters: function() {
      return privateGetAllRecruiters()
    },
    publicGetAllStudents: function() {
      return privateGetAllStudents();
    },
    publicGetStudentsFromCohort: function(cohort) {
      return privateGetStudentsFromCohort(cohort)
    },
    publicSubmitRecruiter: function(recruiter) {
      return privateSubmitRecruiter(recruiter);
    },
    publicSaveSchedule: function(schedule) {
      return privateSaveSchedule(schedule);
    },
    publicSubmitStudent: function(student) {
      return privateSubmitStudent(student);
    }
  };

  return publicAPI;
}]);