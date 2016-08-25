/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
// .controller("countryController", function ($scope) {
//     $scope.name = "India";
// })
// .controller("stateController", function ($scope) {
//     $scope.name = "Maharashtra";
// })
// .controller("cityController", function ($scope) {
//     $scope.name = "Mumbai";
// });
    .controller("countryController", function () {
        this.name = "India";
    })
    .controller("stateController", function () {
        this.name = "Maharashtra";
    })
    .controller("cityController", function () {
        this.name = "Mumbai";
    });