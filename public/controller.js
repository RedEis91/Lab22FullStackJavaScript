var app = angular.module('myMod');

app.controller('myController', function($scope, $http){
    
    $http({
        method: 'GET',
        url: '/lyrics'
    }).then(function successCallback(response){
        $scope.myLyrics = response.data;
    });

});