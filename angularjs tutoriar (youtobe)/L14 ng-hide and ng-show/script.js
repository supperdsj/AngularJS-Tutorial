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
        var employees=[
            {name:"Ben",gender:1,salary:44000.788},
            {name:"Sara",gender:2,salary:68000},
            {name:"Mark",gender:1,salary:57000},
            {name:"Pam",gender:2,salary:53000},
            {name:"Todd",gender:3,salary:60000}
        ];
        $scope.employees=employees;
        $scope.hideGender=false;
    });