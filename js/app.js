var myApp = angular.module("myApp",["ui.router"]);

myApp.controller("MainCtlr",["$scope","$state",function($scope,$state){
    $scope.go = function(stateName){
        $state.go(stateName);
    }
}]);

myApp.config(function($locationProvider,$stateProvider,$urlRouterProvider){
    // Commented out code to remove the hashtag. Note - need to look further into this aspect.
    //$locationProvider.html5Mode(true);
    // Defaults all possible routes to the given url of "/"
    $urlRouterProvider.otherwise('/');
    // State provider with defined states/views
    // Controller is immediately loaded and called when the state is entered
    $stateProvider
        // The home state should be the frontpage of the whole project
        .state('home',{
            url:"/",
            templateUrl:"templates/home.html",
            controller:"homeCtlr"
        })
        .state('2017',{
            url:"/2017",
            templateUrl:"templates/2017.html",
            controller:"2017Ctlr"
        })
        
});

myApp.controller("homeCtlr",["$scope",function($scope) {
    
}]);

myApp.controller("2017Ctlr",["$scope","$http",function($scope,$http) {
    
    $http.get("data/2017.csv").then(function(data) {
        console.log(data);
    });
}]);