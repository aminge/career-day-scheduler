myApp.controller('SavedSchedulesController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.dataFactory.getSchedules().then(function() {
    $scope.schedules = $scope.dataFactory.schedulesArray();
  });

}]);