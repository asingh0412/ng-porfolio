// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

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

});
