myApp.controller('NewScheduleController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;
  $scope.recruiterList = [];

  $scope.addRecruiterToEvent = function (recruiter) {
    $scope.recruiterList.push(recruiter);
  };

  $scope.generateSchedule = function() {
    var scheduleInfo = {
      name: $scope.name,
      cohort: $scope.cohort,
      numberOfInterviews: $scope.numberOfInterviews,
      startTime: $scope.startTime,
      interviewLength: $scope.interviewLength,
      breakLength: $scope.breakLength,
      recruiters: $scope.recruiterList
    };

    $scope.dataFactory.saveSchedule(scheduleInfo);
  };



}]);