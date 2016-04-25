/**
 * 
 */

var app = angular.module("myApp", []);
app.controller("FormCtrl", function ($scope, $http) {
     var formData = {
        firstname: "default",
        lastname: "default",
        email: "default",
        address: "default",
        gender: "default",
        age: "default",
        interest : "default",
        bio: "default"	
    };
     
    $scope.save = function() {
        formData = $scope.form;
    };

    $scope.submitForm = function() {
    	if (formData == " ")
   	 {
   	alert( "please enter valid data");
   	 }
    	else
    		{
        console.log("posting data....");
        formData = $scope.form;
        console.log(formData);
        alert("Registration Successful..!");
    }
    };

 });