myApp.controller('CompleteGoalsController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.students = $scope.dataFactory.publicGetStudents()


}]);