/**
 * 
 */
var helloApp = angular.module("helloApp", []);
helloApp.controller("CompanyCtrl", function($scope) {

$scope.companies = [
{ 'name':'Kalyani',
'jobprofile': 'web Designer',
'headoffice': 'Bangalore'},
{ 'name':'Aparna',
'jobprofile': 'IOS Developer',
'headoffice': 'Pune'},
];

$scope.addRow = function(){
$scope.companies.push({ 'name':$scope.name, 'jobprofile': $scope.jobprofile, 'headoffice':$scope.headoffice });
$scope.name='';
$scope.jobprofile='';
$scope.headoffice='';
};


});