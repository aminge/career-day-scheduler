var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/contacts', {
      templateUrl: '/views/templates/contacts.html',
      controller: 'ContactsController'
    })
    .when('/students', {
      templateUrl: '/views/templates/students.html',
      controller: 'StudentsController'
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
    .when('/viewCohort', {
      templateUrl: '/views/templates/viewCohort.html',
      controller: 'ViewCohortController'
    })
    .when('/allCohorts', {
      templateUrl: '/views/templates/allCohorts.html',
      controller: 'AllCohortsController'
    })
    .otherwise({
      redirectTo: 'students'
    });
}]);