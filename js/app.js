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
        console.log(stateName)
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
            templateUrl:"templates/landing.html",
            controller:"homeCtlr"
        })
        .state('salGuide',{
            url:"/salGuide",
            templateUrl:"templates/salguide.html",
            controller:"salGuideCtlr"
        });
        
});

myApp.controller("homeCtlr",["$scope",function($scope) {
    
}]);
myApp.controller("salGuideCtlr",["$scope",function($scope) {
    
}]);

/*myApp.controller("2017Ctlr",["$scope","$http","CSVtoJSON","_",function($scope,$http,CSVtoJSON,_) {
    var csv_data, display_data;
    $scope.searchValue = '';
    var termLength = 0;
    CSVtoJSON.read("data/2017.csv").then(function(data){
        csv_data = data;
        display_data = data;
        renderTable();
        //console.log(CSVtoJSON.search(data,{div:"A. James Clark School of Engineering"}));
    });
    $scope.searchProf = function() {
        //posTest = (termLength - $scope.searchValue.length) > 0;
        termLength = $scope.searchValue.length;
        console.log($scope.searchValue)
        
        //console.log("hi")
        display_data = _.filter(csv_data,function(i){
            return i.name.toLowerCase().includes($scope.searchValue.toLowerCase());
        });
        renderTable();
        
        
    }
    
    function renderTable() {
        //console.log($scope.searchValue);
        //console.log("table rendered")
        htmlString = "<tr><th>Name</th><th>Department</th><th>Division</th><th>Title</th><th>Salary</th></tr>";
        for(i = 0 ; i < display_data.length && i < 50; i++) {
            htmlString += "<tr>" ;
            htmlString += "<td>" + display_data[i].name + "</td>";
            htmlString += "<td>" + display_data[i].dept + "</td>";
            htmlString += "<td>" + display_data[i].div + "</td>";
            htmlString += "<td>" + display_data[i].title + "</td>";
            htmlString += "<td>" + display_data[i].salary + "</td>";
            htmlString += "</tr>"; 
        }
        document.getElementById("data").innerHTML = htmlString;
    }
}]);*/

/*myApp.service("CSVtoJSON",["$http", function($http) {
    
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
    
    
}]);*/

