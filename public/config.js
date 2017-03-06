var app = angular.module('myMod');

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/lyrics', {
        controller: 'myController',
        templateUrl: 'lyrics.html'
    });
    
    
    $locationProvider.hashPrefix('');
});