var app = angular.module('myApp', []);

app.controller('AppCtrl', function($scope, $http){

  $scope.find = function() {
    console.log("Now you're in the find function");
    $http.get('/contactList').success(function (response) {
        console.log("I got the data");
        $scope.contactList = [];
        $scope.contactList = response;
    });
};
});
