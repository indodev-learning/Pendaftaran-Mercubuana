var app  = angular.module("PendaftaranMercubuana", ["ngRoute", "ngResource"]);
var view = "views";

app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/", {
        templateUrl : view + "/home/home.html"
    })
    .when("/home", {
        templateUrl : view + "/home/home.html"
    })
    .when("/pendaftaran-s1", {
        templateUrl : view + "/pendaftaran/s1.html"
    })
    .when("/pendaftaran-syarat", {
        templateUrl : view + "/pendaftaran/syarat_pendaftaran.html"
    })
    .otherwise({ redirectTo : "/"});
});
