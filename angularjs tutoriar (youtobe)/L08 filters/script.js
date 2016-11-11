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
        // $scope.rowLimit=3;
        $scope.testArray = [
            {name: "test1",
                tag: [{id: 1, name: "tag11"}, {id: 1, name: "tag12"}]
            },
            {name: "test2",
                tag: [{id: 1, name: "tag21"}, {id: 1, name: "tag22"}]
            },
            {name: "test3",
                tag: [{id: 1, name: "tag31"}, {id: 1, name: "tag32"}]
            },
            {name: "test4",
                tag: [{id: 1, name: "tag41"}, {id: 1, name: "tag42"}]
            }]
    });
myApp.filter("findByStringify", function () {
    return function (array, input) {
        if (!input) {
            return array;
        }
        // console.log(emplyees);
        // console.log(input);
        var inputArray = input.split(' ');
        var resultArray = [];
        for (var i = 0; i < inputArray.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (JSON.stringify(array[j]).split(inputArray[i]).length > 1) {
                    resultArray.push(array[j]);
                }
            }
        }
        return resultArray;
    }
});