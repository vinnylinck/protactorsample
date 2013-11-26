/*global angular, console*/
angular.module('e2e').controller('userDetailsController', ['$scope', '$routeParams', '$window', function ($scope, $routeParams, $window) {
    'use strict';
    
    var i = 0;
    
    $scope.user = {};
    $scope.isUpdate = false;
    
    $scope.bindUser = function (login) {
        var users = JSON.parse($window.localStorage.getItem('users'));
        
        console.log('entrou');
        
        for (i = 0; i < users.length; i += 1) {
            if (users[i].login === login) {
                $scope.user = users[i];
                $scope.isUpdate = true;
                break;
            }
        }
    };
    
    $scope.updateUser = function () {
        var users = JSON.parse($window.localStorage.getItem('users')),
            found = false;
        
        for (i = 0; i < users.length; i += 1) {
            if (users[i].login === $scope.user.login) {
                users[i] = $scope.user;
                found = true;
                break;
            }
        }
        
        if (!found) {
            users.push($scope.user);
        }
        
        $window.localStorage.setItem('users', JSON.stringify(users));
        
        $scope.go('/users');
        
        $scope.deleteUser = function () {
            if ($window.confirm('Confirm?')) {
                var users = JSON.parse($window.localStorage.getItem('users')),
                    newUsers = [];
                
                for (i = 0; i < users.length; i += 1) {
                    if (users[i].login !== $scope.user.login) {
                        newUsers.push(users[i]);
                    }
                }
                
                $window.localStorage.setItem('users', JSON.stringify(newUsers));
                $scope.go('/users');
            }
        };
    };
    
    $scope.bindUser($routeParams.login);
}]);