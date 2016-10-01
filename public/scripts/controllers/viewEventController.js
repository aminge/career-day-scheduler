myApp.controller('ViewEventController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.currentEvent = $scope.dataFactory.getCurrentEvent();

}]);
