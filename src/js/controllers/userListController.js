/*global angular*/

angular.module('e2e').controller('userListController', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window) {
    'use strict';
    
    $scope.title = 'User List';
    $scope.users = [];
    
    $scope.bindUsers = function () {
        
        $scope.users = JSON.parse($window.localStorage.getItem('users'));
        
        // default data
        if (!$scope.users || $scope.users.length === 0) {
            $scope.users = [
                {
                    login: 'akira',
                    name: 'Fábio',
                    project: 'Sales Assistant'
                },
                {
                    login: 'felipem',
                    name: 'Felipe',
                    project: 'MRS'
                },
                {
                    login: 'viniciusl',
                    name: 'Vinicius',
                    project: 'Continente Telemóvel'
                }
            ];
        }
        
        $window.localStorage.setItem('users', JSON.stringify($scope.users));
    };
    
    $scope.go = function (url) {
        if (!$scope.isFailingMode('user-list')) {
            $rootScope.go(url);
        }
    };
    
    $scope.bindUsers();
    
}]);