/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.message = "hello angular!";
        var employees={
            firstName:'ben',
            lastName:'cr',
            gender:'male'
        };
        $scope.emploee=employees;
    });