myApp.controller('AllCohortsController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.addCohort = function() {
    var newCohort = {
      name: $scope.name
    };

    $scope.dataFactory.submitCohort(newCohort);

    $scope.name = '';
  };

  $scope.dataFactory.getAllCohorts().then(function() {
    $scope.cohorts = $scope.dataFactory.cohortsArray();
  });

}]);