myApp.controller('ViewEventController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.currentSchedule = $scope.dataFactory.getCurrentSchedule();

}]);
