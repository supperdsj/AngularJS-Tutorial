/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        var country={
            name:"USA",
            capital:"Washington,D.C.",
            flag:"PoweredByMacOSX.gif"
        };
        $scope.country=country;
    });