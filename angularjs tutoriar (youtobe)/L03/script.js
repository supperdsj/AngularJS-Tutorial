/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        // $scope.message = "angularJs tutorial";
        var employee = {
            firstName: "David",
            lastName: "Hastings",
            gender: "Male"
        };
        $scope.employee = employee;
    });