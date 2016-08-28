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


  $scope.dataFactory.getStudentsFromCohort($scope.dataFactory.getCurrentCohort).then(function() {
    // make sure these are only the students from the current cohort
    $scope.students = $scope.dataFactory.studentsArray();
  });

}]);