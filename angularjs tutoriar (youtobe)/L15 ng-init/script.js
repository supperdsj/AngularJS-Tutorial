/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", [])
    .filter('gender',function(){
        return function(gender){
            switch (gender){
                case 1:
                    return 'male';
                case 2:
                    return 'female';
                case 3:
                    return 'unknow';
            }
        }
    })
    .controller("myController", function ($scope) {
        
        $scope.employees=employees;
        $scope.hideGender=false;
    });