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

myApp.service("tableService",["$http", function($http) {
    var baseUrl = "php/";

    return{
        getTable: function(year) {
            return $http.get(baseUrl+"getAllData.php?year="+year);
        }
    };
}]);

myApp.controller("MainCtlr",["$scope","$state",function($scope,$state){
    $scope.go = function(stateName){
        $state.go(stateName);

    }
}]);

myApp.controller("testCtlr",["$scope","$http","tableService",function($scope,$http,tableService){

    tableService.getTable().then(function(data) {
        $scope.tableData = data;
    })

}]);

myApp.config(function($locationProvider,$stateProvider,$urlRouterProvider){
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
        // Actual
        .state('salGuide',{
            url:"/salGuide?year",
            templateUrl:"templates/salguide.html",
            controller:"salGuideCtlr"
        });
});

myApp.controller("homeCtlr",["$scope",function($scope) {

}]);

myApp.controller("salGuideCtlr",["$scope", '$stateParams', "tableService", "_",function($scope, $stateParams, tableService,_) {

    $scope.ads = [
      {
        "link": "http://www.terrapinrow.com",
        "image": "sources/ad2.gif"
      },
      {
        "link": "http://go.umd.edu/seniors",
        "image": "sources/ad1.gif"
      }
    ];

    console.log($scope.ads);

    var rand = Math.random();
    if (rand < 0.5) {
      var ad1 = $scope.ads[0];
      $scope.ads[0] = $scope.ads[1];
      $scope.ads[1] = ad1;
    }


    $scope.dataLoading = true;

    $scope.page_count = 1;
    $scope.max_pages = 1;
    $scope.year = $stateParams.year;
    $scope.search_term = "";
    $scope.tableData = [];
    var full_data = [];
    var curr_data = [];
    // An array to hold status of each row if the table is being sorted by it
    // NOTE #1 for values: 0 - not being sorted by that row, 1 - sorted ascending by that row, 2 - sorting descending by that row
    // NOTE #2 for indices: 0 - employee/name, 1 - department, 2 - title, 3 - salary
    $scope.sortRowArray = [1,0,0,0];

    $scope.sortRowObj = {
        "Employee":0,
        "Department":0,
        "Title":0,
        "Salary":0
    };
    if ($stateParams.year == null){
      $stateParams.year = 2018;
    }
    $scope.year = $stateParams.year;
    tableService.getTable($stateParams.year).then(function(data) {
        //console.log("Hello?")
        $scope.dataLoading = false;
        full_data = data.data;
        curr_data = full_data;
        var tableArr = full_data.slice(0,10)
        $scope.tableData = tableArr;
        //console.log(full_data.length)
        $scope.max_pages =  Math.ceil (full_data.length / 10);
        //console.log("Hello?")
        sortData();
        //console.log($scope.tableData);
    });
    $scope.next_page = function() {
        if ($scope.page_count <= $scope.max_pages) {
            $scope.tableData = curr_data.slice($scope.page_count*10, ($scope.page_count+1)*10);
            $scope.page_count += 1;
        }
    }
    $scope.prev_page = function() {
        if($scope.page_count > 1) {
            $scope.page_count -= 1;
            $scope.tableData = curr_data.slice(($scope.page_count-1)*10, $scope.page_count*10);
        }
    }
    $scope.search_data = function() {
        if($scope.search_term.length > 0) {
            var terms = $scope.search_term.split(" ");
            console.log(terms);
            result = _.filter(full_data, function(elt) {
                find = true;
                terms.forEach(function (term, index, arr){
                  a = elt.Employee.toLowerCase().includes(term.toLowerCase());
                  b = elt.Department.toLowerCase().includes(term.toLowerCase());
                  c = elt.Division.toLowerCase().includes(term.toLowerCase());
                  d = elt.Title.toLowerCase().includes(term.toLowerCase());
                  e = elt.Salary.toLowerCase().includes(term.toLowerCase());
                  find = find && (a || b || c || d || e);
                }, this);
                return find;

            });
            curr_data = result;
            $scope.page_count = 1;
            $scope.max_pages = Math.ceil(curr_data.length / 10);
            $scope.tableData = curr_data.slice(0,10);
        } else {
            //console.log(full_data.length);
            $scope.page_count = 1;
            curr_data = full_data;
            $scope.max_pages = Math.ceil(full_data.length / 10);
            $scope.tableData = full_data.slice(0,10);
        }
        sortData();
    }
    $scope.sortRows = function(sortByVal) {


        if(sortByVal == "Employee") {
            $scope.sortRowArray.fill(0,1,4)
            if($scope.sortRowArray[0] != 1) {

                $scope.sortRowArray[0] = 1;
            } else {

                $scope.sortRowArray[0] = 2;
            }
        }
        if(sortByVal == "Title") {
            //console.log("Hello")
            $scope.sortRowArray.fill(0,0,2);
            $scope.sortRowArray.fill(0,3,4);
            if($scope.sortRowArray[2] != 1){
                $scope.sortRowArray[2] = 1
            } else {


                $scope.sortRowArray[2] = 2;
            }
        }
        if(sortByVal == "Department") {
            $scope.sortRowArray.fill(0,0,1);
            $scope.sortRowArray.fill(0,2,4);
            if($scope.sortRowArray[1] != 1) {
                $scope.sortRowArray[1] = 1
            } else {

                $scope.sortRowArray[1] = 2;
            }

        }
        if(sortByVal == "Salary") {
            $scope.sortRowArray.fill(0,0,3);
            if($scope.sortRowArray[3] != 1) {
                $scope.sortRowArray[3] = 1;
            } else {

                $scope.sortRowArray[3] = 2;
            }
        }
        //console.log($scope.sortRowArray);
       sortData()
    };
    // Call this function after changing the sort array, it will sort automatically based upon the array data
    function sortData() {
        //console.log("Sorted!")
        namesArray = ["Employee","Department","Title","Salary"];
        sortIndex = -1;
        sortVal = 0;
        for(i = 0; i < $scope.sortRowArray.length; i++) {
            if($scope.sortRowArray[i] != 0) {
                sortIndex = i;
                sortVal = $scope.sortRowArray[i]
                break;
            }
        }
        if(sortIndex == -1) {
            return;
        }
        name = namesArray[sortIndex];

        if(name == "Salary") {
            curr_data = _.sortBy(curr_data, function(elt){
                curr_salary = elt.Salary.replace(/[\$,]/g,'');
                return parseInt(curr_salary);
            });
        } else {
            curr_data = _.sortBy(curr_data, function(elt) {
                return elt[name].toLowerCase();
            });
        }

        curr_data = sortVal == 2 ? curr_data.reverse() : curr_data;
        resetTable();
    }

    function resetTable() {
        $scope.page_count = 1;
        $scope.max_pages = Math.ceil(curr_data.length / 10);
        $scope.tableData = curr_data.slice(0,10);
    }
    window.onkeydown = function(e) {
        var event = window.event ? window.event : e;
        var target = event.target || event.srcElement;

        if (target.nodeName != 'INPUT') {

            // Pressing left
            if (event.keyCode == 37) {
                console.log("left")
                document.getElementById("prev").click();
            }
            if (event.keyCode == 39) {
                console.log("right")
                //$scope.next_page();
                document.getElementById("next").click();
            }
        }
    }

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
