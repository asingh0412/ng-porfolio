// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute','ui.bootstrap', 'utils.autofocus']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
  $scope.format = 'yyyy/dd/MM';
  $scope.date = new Date();



});

scotchApp.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';

  console.log('Contact Controller');
  $scope.states=[
      {id: 0, name:" "},
      {id: 1, name:"Washington"},
      {id: 2, name:"Arizona"},
      {id: 3, name:"California"},
      {id: 4, name:"Virginia"},
      {id: 5, name:"Michigan"},
      {id: 6, name:"New York"},
      {id: 7, name:"New Mexico"},
      {id: 8, name:"Nevada"},
      {id: 9, name:"Utah"},
      {id: 10, name:"Wyoming"},
      {id: 11, name:"West Virginia"},
      {id: 12, name:"Oregon"}
    ];

    //This sets the default value of the select in the ui
    $scope.selectedState = {id:4, name:"Virginia"};
    var s = $scope.selectedState.name;
    console.log(s);

  // attach original to the object
  $scope.original={
    fName:'A',
    lName:'S',
    gender:'male',
    email:'as@as.com',
    address:'1st st, T3',
    city:'abc',
    states:'Virginia',
    zip:'12345'
  };

  //Copy the original to contact. contact will be bind to a form.
  $scope.contact = angular.copy($scope.orignial);

  $scope.resetForm = function (){
    //alert($scope.contact.fName);
      //$scope.contact = [];
      $scope.contact = angular.copy($scope.original);
  };

  $scope.format = 'MM/dd/yyyy';
  $scope.date = new Date();
});
function randomFunc(){
  console.log("In Random function");
  var num1 = parseInt(document.getElementById("rand1").value);
  var num2 = parseInt(document.getElementById("rand2").value);
  return Math.floor(Math.random() * (num2-num1)) + num1;
}
