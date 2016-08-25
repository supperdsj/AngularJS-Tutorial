/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope,stringService) {
        $scope.transformString=function(input){
            $scope.output=stringService.processString(input);
        }
    });