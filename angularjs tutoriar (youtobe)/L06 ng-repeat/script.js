/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.message = "hello angular!";
        var employees = [
            {firstName: 'ben', lastName: 'cr', gender: 'male'},
            {firstName: 'sara', lastName: 'paul', gender: 'fmale'},
            {firstName: 'qs', lastName: 'ffs', gender: 'male'},
            {firstName: 'agg', lastName: 'sasd', gender: 'male'},
            {firstName: 'asdasd', lastName: 'ff', gender: 'fmale'},
            {firstName: 'ben111', lastName: 'cr3333', gender: 'fmale'}]
        ;
        $scope.employees = employees;
    });