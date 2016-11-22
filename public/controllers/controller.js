var app = angular.module('myApp', []);

app.controller('AppCtrl', function($scope, $http){

$http.get('/contactList').success(function(response){
  console.log("I got the data");
  $scope.contactList = response;
});

});
