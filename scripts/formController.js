app.controller('formController', function($scope, formServices) {

    $scope.formData = {
      fName :'',
      lName : '',
      email : ''
    };

    $scope.data = [];
  
    $scope.submit = function (){
      console.log("In Submit function");
        $scope.data.push($scope.formData);

        formServices.data
    };
 
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