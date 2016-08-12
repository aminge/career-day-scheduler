myApp.controller('SavedSchedulesController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.dataFactory.publicGetSchedules().then(function() {
    $scope.schedules = $scope.dataFactory.publicSchedulesArray();
  });

}]);