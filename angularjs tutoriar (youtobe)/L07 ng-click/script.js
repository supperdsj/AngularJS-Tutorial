/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope) {
        var technologies = [
            {name: 'C#', like: 0, dislike: 0},
            {name: 'ASP.Net', like: 0, dislike: 0},
            {name: 'SQL Server', like: 0, dislike: 0},
            {name: 'AngularJS', like: 0, dislike: 0}
        ];
        $scope.technologies = technologies;
        $scope.incrementLikes=function(technology){
            technology.like++;
        };
        $scope.incrementdisLikes=function(technology){
            technology.dislike++;
        };
    });