myApp.controller('RecruitersController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.addRecruiter = function() {
    var newRecruiter = {
      name: $scope.name,
      company: $scope.company,
      email: $scope.email
    };

    console.log('In the controller');

    $scope.dataFactory.submitRecruiter(newRecruiter).then(function() {

      console.log('submitted recruiter: ', newRecruiter);

      $scope.dataFactory.getAllRecruiters().then(function() {
        $scope.recruiters = $scope.dataFactory.recruitersArray();
        $scope.name = '';
        $scope.company = '';
        $scope.email = '';
      });
    });
  };

  $scope.dataFactory.getAllRecruiters().then(function() {
    $scope.recruiters = $scope.dataFactory.recruitersArray();
  });
}]);