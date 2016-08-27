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
