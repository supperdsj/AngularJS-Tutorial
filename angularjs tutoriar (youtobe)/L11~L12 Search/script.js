/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {name: "Ben", dateOfBirth: new Date("November 23,1980"), gender: "Male", salary: 44000.788},
            {name: "Sara", dateOfBirth: new Date("May 05,1970"), gender: "Female", salary: 68000},
            {name: "Mark", dateOfBirth: new Date("August 15,1974"), gender: "Male", salary: 57000},
            {name: "Pam", dateOfBirth: new Date("October 27,1979"), gender: "Female", salary: 53000},
            {name: "Todd", dateOfBirth: new Date("December 30,1983"), gender: "Male", salary: 60000}
        ];
        $scope.employees = employees;
        $scope.searchText = '';
        $scope.mySearch = function (item) {
            if ($scope.searchText == '') {
                return true;
            } else {
                if (item.name.toLowerCase().indexOf($scope.searchText.toLocaleLowerCase()) != -1
                ||
                    item.gender.toLowerCase().indexOf($scope.searchText.toLocaleLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
    });