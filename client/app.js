var app = angular.module("contactsApp", ["ngRoute","ui.bootstrap"]);
app.config(function($routeProvider) {
    $routeProvider
	.when("/", {
        templateUrl : "views/dashboard.html"
    })
    .when("/contact-list", {
        templateUrl : "views/contact-list.html",
        controller : "contactController"
    })
    .when("/contact-form", {
        templateUrl : "views/contact-form.html",
        controller : "contactController"
    })
});