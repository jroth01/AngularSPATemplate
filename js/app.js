/* Define angular module */
var app = angular.module('myApp', ['ngRoute','ui.router','ngSanitize','ui.bootstrap','ngAnimate']);

/* Routing logic */
app.config(function($routeProvider,$locationProvider) {

  $routeProvider
        .when('/', {
                templateUrl: '../partials/home.html',
                controller: 'mainCtrl'
        })
        .when('/about', {
                templateUrl: '../partials/about.html',
                controller: 'mainCtrl'
        })
        .when('/contact', {
                templateUrl: '../partials/contact.html',
                controller: 'mainCtrl'
        })
});
