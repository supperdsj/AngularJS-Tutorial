/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("countryController", function ($scope,$http,$location,$anchorScroll) {
        $http.get("./data.json").then(function(response){
            $scope.countries=response.data;
            console.log($scope.countries);
        });
        $scope.scrollToThere=function (countryName) {
            $location.hash(countryName);
            $anchorScroll();
        }
    });