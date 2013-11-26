/*global angular*/
angular.module('e2e').controller('loginController', ['$scope', function ($scope) {
    'use strict';
    
    $scope.title = 'Login';
    $scope.username = '';
    $scope.password = '';
    
    $scope.login = function () {
        if ($scope.username === 'admin' && $scope.password === 'admin') {
            $scope.go('/users');
        } else {
            $scope.message = 'Invalid username or password!';
        }
    };
    
}]);