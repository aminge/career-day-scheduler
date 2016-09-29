// Note: I don't think I need this anymore. The functionality will be moved
// to the viewCohort view/controller. Taylor will be able to add new students
// to a particular cohort, but she won't be able to view them all at once

myApp.controller('StudentsController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  // this controller should be changed to cohorts instead of students

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

  $scope.dataFactory.getAllStudents().then(function() {
    $scope.students = $scope.dataFactory.studentsArray();
  });

  $scope.dataFactory.getAllCohorts().then(function() {
    $scope.cohorts = $scope.dataFactory.cohortsArray();
  });

}]);
