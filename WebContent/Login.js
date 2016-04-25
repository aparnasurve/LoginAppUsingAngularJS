/**
 * 
 */
var myapp = angular.module("MyApp", [])
myapp.controller('validationCtrl', function($scope) {
	
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
	 
	$scope.Login = function()
	{
		  var validUsername = "kalyani";
		   var validPassword = "abc123";
		  
			$scope.Login = function()
			{
				  var uname = document.getElementById("login-username").value;
				  var pwd = document.getElementById("login-password").value;
				  console.log("username :" +uname);
					console.log(pwd);
			if(uname==validUsername && pwd==validPassword)
					{
					alert("Sucessful Login..!");
					console.log(uname);
					console.log(pwd);
					}
				else if(uname=="" && pwd=="")
				{
					alert("Please Enter Username and Password..!");
					}
				
			else if(uname==validUsername && pwd=="")
				{
				alert("Please Enter Password..!");
				}
				
			else
				{
				alert("Unsucessful Login..!");
				}
			}
	
//	$http.get("C:\Users\xbbl1qn\ANGULARJS\LoginPageApplication\WebContent\RegistrationPage.html")
//	.then(function(response){
//		$scope.Details = response;
//	});
	}
	
	
	
   });
 
