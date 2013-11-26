/*global angular*/
angular.module('e2e', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    'use strict';
    
    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    }).when('/users', {
        templateUrl: 'partials/user-list.html',
        controller: 'userListController'
    }).when('/user/:login', {
        templateUrl: 'partials/user-details.html',
        controller: 'userDetailsController'
    }).otherwise({
        redirectTo: "/login"
    });
    
}]);