/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope,$location,$anchorScroll) {
        $scope.scrollToThrere=function(scrollLocation){
            //为和angular路由#区分
            $location.hash(scrollLocation);
            //偏移
            $anchorScroll.yOffset=-50;
            $anchorScroll();
        }
    });