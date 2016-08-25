/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("redColorController", function ($scope,$rootScope) {
        $scope.redColor='i am red color';
        $rootScope.rootScopeColor='i am root scope color R';
    })
    .controller("greenColorController",function($scope,$rootScope){
        $scope.greenColor='i am green color';
        $rootScope.rootScopeColor='i am root scope color G';
    });