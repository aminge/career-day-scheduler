myApp.controller('ViewCohortController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.addStudent = function() {
    var newStudent = {
      name: $scope.name,
      cohort: $scope.cohort,
      email: $scope.email
    };

    $scope.dataFactory.submitStudent(newStudent);

    $scope.name = '';
    $scope.cohort = '';
    $scope.email = '';
  };

  // When this page loads, it should just do one function call - a get request through the data factory
  // That request should get ALL the information for that cohort, including the list of students, the
  // list of events, and all of the information associated with those events - schedules, etc.
  // Upon response, the variables will be assigned to the appropriate parts of the response
  // This will be a lot of work, but I think it's simpler to do it this way than to have a bunch of
  // different functions being fired off, and having multiple get requests being sent.

  // I also would like to redo the wireframes, and include flow charts with them to show what happens
  // when the user does various actions (submits a form, etc.). Each view/controller would have its
  // own wireframe. Then, for every user action that the view/controller handles, there is a flow
  // chart describing what functions are called, that goes to the data factory, server, database, and
  // back to the server, data factory, and view/controller.
  $scope.cohort = $scope.dataFactory.currentCohort();

  $scope.dataFactory.getStudentsFromCurrentCohort().then(function() {
    $scope.students = $scope.dataFactory.studentsFromCurrentCohort();
  });

  $scope.events = $scope.cohort.events

}]);