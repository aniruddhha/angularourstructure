/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var angularApp = angular.module("angularApp", ["ngRoute"]);

angularApp.config(function ($routeProvider) {

    $routeProvider.when("/", {
        controller: "ControllerCity",
        templateUrl: "view/viewcountries.html"
    }).when("/table",{
        controller: "ControllerTable",
        templateUrl: "view/viewtable.html"
    }).when("/doctors",{
        controller: "ControllerDoctor",
        templateUrl: "view/viewdoctors.html"
    }).otherwise({
        redirectTo: "/"
    });

});

angularApp.factory("factoryDoctor",FactoryDoctor);

angularApp.controller("ControllerCity", ControllerCity);
angularApp.controller("ControllerDoctor", ControllerDoctor);
angularApp.controller("ControllerTable", ControllerTable);
