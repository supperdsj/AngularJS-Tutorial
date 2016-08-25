/**
 * Created by dongsj on 16/5/14.
 */
var myApp = angular.module("myModule", ["ui.router"])
    .config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
        //remove #,need server support
        // $locationProvider.html5Mode(true);
        //默认路由
        $urlRouterProvider.otherwise("/home");
        //忽略state url大小写
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "Templates/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl",
                data: {
                    customData1: "Home State Custom Data 1",
                    customData2: "Home State Custom Data 2"
                }
            })
            .state("courses", {
                url: "/course",
                templateUrl: "Templates/course.html",
                controller: "courseController",
                controllerAs: "coursesCtrl",
                data: {
                    customData1: "Courses State Custom Data 1",
                    customData2: "Courses State Custom Data 2"
                }
            })
            //nested view
            .state("countriesParent", {
                url: "/countries",
                controller: "studentParentController",
                controllerAs: "studentParentCtrl",
                templateUrl: "Templates/studentParent.html",
                resolve: {
                    studentTotals: function ($http) {
                        return $http.get("./data2.json").then(function (response) {
                            console.log('countriesParentsGet');
                            return response.data;
                        });
                    }
                }
            })
            .state("countriesParent.countries", {
                url: "/",
                // templateUrl: "Templates/countries.html",
                // controller: "countriesController",
                views:{
                    "studentData":{
                        templateUrl: "Templates/countries.html",
                        controller: "countriesController"
                    },
                    "totalData":{
                        templateUrl:"Templates/studentsTotal.html",
                        controller:"studentsTotalController",
                        controllerAs:"studentsTotalCtrl"
                    }
                }
            })
            .state("countriesParent.countryDetail", {
                url: "/:id?",
                views:{
                    "studentData":{
                        templateUrl: "Templates/countryDetail.html",
                        controller: "countryDetailController",
                        resolve: {
                            countryDetailList: function ($http, $stateParams) {
                                return $http.get("./data.json").then(function (response) {
                                    if ($stateParams.id) {
                                        return response.data[$stateParams.id];
                                    } else {
                                        return response.data[0];
                                    }
                                });
                            }
                        }
                    }
                }
                // templateUrl: "Templates/countryDetail.html",
                // controller: "countryDetailController",
                // resolve: {
                //     countryDetailList: function ($http, $stateParams) {
                //         return $http.get("./data.json").then(function (response) {
                //             if ($stateParams.id) {
                //                 return response.data[$stateParams.id];
                //             } else {
                //                 return response.data[0];
                //             }
                //         });
                //     }
                // }
            })

    })
    .controller("homeController", function ($state) {
        this.message = "Home Page";
        this.homeCustomData1 = $state.current.data.customData1;
        this.homeCustomData2 = $state.current.data.customData2;
        this.courseCustomData1 = $state.get("courses").data.customData1;
        this.courseCustomData2 = $state.get("courses").data.customData2;
    })
    .controller("courseController", function ($scope, $state) {
        $scope.courses = ['angularJs', 'nodeJs', 'SASS'];
        $scope.courseCustomData1 = $state.current.data.customData1;
        $scope.courseCustomData2 = $state.current.data.customData2;
    })
    .controller("studentParentController",function(studentTotals){
        this.total=studentTotals.total;
        this.males=studentTotals.males;
        this.females=studentTotals.females;
    })
    .controller("countriesController", function ($scope, $http, $location, $anchorScroll, $state,studentTotals) {
        $scope.total=studentTotals.total;
        console.log(1);
        $scope.reloadData = function () {
            $state.reload();
        };
        $scope.go = function () {
            //state跳转
            $state.go("countryDetail", {id: $scope.id});
        };
        $scope.search = function () {
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
    .controller("countryDetailController", function ($scope, $http, countryDetailList,studentTotals) {
        $scope.total=studentTotals.total;
        $scope.country = countryDetailList;
    })
    .controller("studentsTotalController",function(studentTotals){
        this.total=studentTotals.total;
        this.males=studentTotals.males;
        this.females=studentTotals.females;
    });