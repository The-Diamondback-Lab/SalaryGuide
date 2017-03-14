var myApp = angular.module("myApp",["ui.router"]);

function LodashFactory($window) {  
  if(!$window._){
    // If lodash is not available you can now provide a
    // mock service, try to load it from somewhere else,
    // redirect the user to a dedicated error page, ...
  }
  return $window._;
}

// Define dependencies
LodashFactory.$inject = ['$window'];

// Register factory
myApp.factory('_', LodashFactory); 

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

myApp.controller("2017Ctlr",["$scope","$http","CSVtoJSON",function($scope,$http,CSVtoJSON) {
    var csv_data;
    CSVtoJSON.read("data/2017.csv").then(function(data){
        csv_data = data;
        for(i = 0 ; i < data.length && i < 100; i++) {
            htmlString = "<tr>" ;
            htmlString += "<td>" + data[i].name + "</td>";
            htmlString += "<td>" + data[i].dept + "</td>";
            htmlString += "<td>" + data[i].div + "</td>";
            htmlString += "<td>" + data[i].title + "</td>";
            htmlString += "<td>" + data[i].salary + "</td>";
            htmlString += "</tr>";
            document.getElementById("data").innerHTML += htmlString;
        }
        console.log(CSVtoJSON.search(data,{div:"A. James Clark School of Engineering"}));
    });
    
}]);

myApp.service("CSVtoJSON",["$http","_", function($http,_) {
    
    this.read = function(path) {
        return $http.get(path).then(function(data) {
            result = data.data;
            result = result.split("\n");
            comma_split = [];
            
            for(i = 1; i < result.length; i++) {
                curr_split = result[i].replace(/\"/g,"").split(",");
                current_obj = {};
                current_obj.name = (curr_split[0]+","+curr_split[1]);
                current_obj.dept = curr_split[2];
                current_obj.div = curr_split[3]
                current_obj.title = curr_split[4]
                current_obj.salary = (curr_split[5] + "," +curr_split[6]);
                comma_split.push(current_obj);
            }
            
            //console.log(comma_split);
            return comma_split;
        });
    }
    
    this.search = function(data,props) {
        return _.filter(data,props);
    }
    
}]);

