/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                // templateUrl: "Templates/home.html",
                template: "<h1>{{homeCtrl.message}}</h1>",
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .when("/courses", {
                // templateUrl: "Templates/course.html",
                template: "<ul><li ng-repeat='course in courses'>{{course}}</li></ul>",
                controller: "courseController"
            })
            .when("/countries", {
                templateUrl: "Templates/countries.html",
                controller: "countriesController"
            })
            // .when("/countryDetail/:id", {
            .when("/countryDetail/:id?", {
                templateUrl: "Templates/countryDetail.html",
                controller: "countryDetailController",
                //resolve未完成时不会跳转
                resolve: {
                    countryDetailList: function ($http, $route) {
                        return $http.get("./data.json").then(function (response) {
                            console.log($route.current.params.id);
                            return response.data[$route.current.params.id];
                        });
                    }
                }
            })
        .otherwise({redirectTo: '/home'});
        //删除#,需服务器支持
        // $locationProvider.html5Mode(true);
    })
    .controller("homeController", function () {
        this.message = "Home Page"
    })
    .controller("courseController", function ($scope) {
        $scope.courses = ['angularJs', 'nodeJs', 'SASS'];
    })
    .controller("countriesController", function ($scope, $http, $location, $anchorScroll, $route, $location) {
        $scope.reloadData = function () {
            $route.reload();
        };
        $scope.search = function () {
            // $location.url("index.html#/countryDetail/:"+$scope.name);
            location.href = "index.html#/countryDetail/" + $scope.name;
        };
        $http.get("./data.json").then(function (response) {
            $scope.countries = response.data;
        });
        $scope.scrollToThere = function (countryName) {
            $location.hash(countryName);
            $anchorScroll();
        }
    })
    .controller("countryDetailController", function ($scope, $http, $routeParams,countryDetailList) {
        console.log(countryDetailList);
        $scope.country = countryDetailList;
    });