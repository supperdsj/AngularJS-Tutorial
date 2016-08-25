/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.employees = [
            {name: "Ben", dateOfBirth: new Date("November 23,1980"), gender: "Male", salary: 44000.788},
            {name: "Sara", dateOfBirth: new Date("May 05,1970"), gender: "Female", salary: 68000},
            {name: "Mark", dateOfBirth: new Date("August 15,1974"), gender: "Male", salary: 57000},
            {name: "Pam", dateOfBirth: new Date("October 27,1979"), gender: "Female", salary: 53000},
            {name: "Todd", dateOfBirth: new Date("December 30,1983"), gender: "Male", salary: 60000}
        ];
        $scope.rowLimit = 3;
        $scope.sortColumn = "name";
        $scope.reserseSort = false;
        $scope.sortData = function (column) {
            $scope.reserseSort = ($scope.sortColumn == column) ? !$scope.reserseSort : false;
            $scope.sortColumn = column;
        };
        $scope.getSortClass = function (colum) {
            if ($scope.sortColumn == colum) {
                return $scope.reserseSort ? 'arrow-down' : 'arrow-up';
            }
            return '';
        }
    });