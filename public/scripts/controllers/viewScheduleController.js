myApp.controller('ViewScheduleController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.currentSchedule = $scope.dataFactory.publicGetCurrentSchedule();

}]);