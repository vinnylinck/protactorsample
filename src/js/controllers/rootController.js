/*global angular, localStorage */
angular.module('e2e').controller('rootController', ['$rootScope', '$location', function ($rootScope, $location) {
    'use strict';
    
    $rootScope.go = function (url) {
        $location.path(url);
    };
    
    $rootScope.toggleFailingMode = function (pageKey) {
        var flag = localStorage.getItem(pageKey),
            value;
        
        if (flag === 'enabled') {
            value = 'disabled';
        } else {
            value = 'enabled';
        }
        
        localStorage.setItem(pageKey, value);
    };
    
    $rootScope.getFailingModeLabel = function (pageKey) {
        var flag = localStorage.getItem(pageKey);
        
        if (flag === 'enabled') {
            return 'Disable failing mode';
        } else {
            return 'Enable failing mode';
        }
    };
    
    $rootScope.isFailingMode = function (pageKey) {
        return (localStorage.getItem(pageKey) === 'enabled');
    };
    
}]);