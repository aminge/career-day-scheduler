myApp.controller('RecruiterController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.addRecruiter = function() {
    var newRecruiter = {
      name: $scope.name,
      company: $scope.company,
      email: $scope.email
    };

    $scope.dataFactory.submitRecruiter(newRecruiter);

    $scope.name = '';
    $scope.company = '';
    $scope.email = '';
  };

  $scope.dataFactory.publicGetAllRecruiters().then(function() {
    $scope.recruiters = $scope.dataFactory.publicRecruitersArray();
  });

}]);