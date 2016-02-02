 //1.
var app = app = angular.module('appmodule', []);
//2.
app.controller('mycontroller', function ($scope) {
    $scope.Employee = {
        EmpNo: 0,
        EmpName: "",
    };
    //3.
    $scope.Employee.EmpName = 'MS';

    //4.
    $scope.lower = function (ename) {
        return ename.toLowerCase(); 
    };
     
});