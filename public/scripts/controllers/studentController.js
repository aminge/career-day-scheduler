myApp.controller('StudentController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.addStudent = function() {
    var newStudent = {
      name: $scope.name,
      cohort: $scope.cohort,
      email: $scope.email
    };

    $scope.dataFactory.publicSubmitStudent(newStudent);

    $scope.name = '';
    $scope.cohort = '';
    $scope.email = '';
  };

  $scope.dataFactory.publicGetAllStudents().then(function() {
    $scope.students = $scope.dataFactory.publicStudentsArray();
  });

}]);