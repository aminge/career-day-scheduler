var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/recruiter', {
      templateUrl: '/views/templates/recruiter.html',
      controller: 'RecruiterController'
    })
    .when('/student', {
      templateUrl: '/views/templates/student.html',
      controller: 'StudentController'
    })
    .when('/newSchedule', {
      templateUrl: '/views/templates/newSchedule.html',
      controller: 'NewScheduleController'
    })
    .when('/savedSchedules', {
      templateUrl: '/views/templates/savedSchedules.html',
      controller: 'SavedSchedulesController'
    })
    .when('/viewSchedule', {
      templateUrl: '/views/templates/viewSchedule.html',
      controller: 'ViewScheduleController'
    })
    .otherwise({
      redirectTo: 'student'
    });
}]);