myApp.controller('ContactsController', ['$scope', 'DataFactory', function($scope, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.addContact = function() {
    var newContact = {
      name: $scope.name,
      company: $scope.company,
      email: $scope.email
    };

    //console.log('In the controller');

    $scope.dataFactory.submitContact(newContact).then(function() {

      //console.log('submitted contact: ', newContact);
      $scope.dataFactory.getAllContacts().then(function() {
        $scope.contacts = $scope.dataFactory.contactsArray();
        $scope.name = '';
        $scope.company = '';
        $scope.email = '';
      });
    });
  };

  $scope.dataFactory.getAllContacts().then(function() {
    $scope.contacts = $scope.dataFactory.contactsArray();
  });
}]);