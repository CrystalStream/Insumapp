angular.module('insumapp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl : "partials/main.html",
			controller  : "MainController"
		})
		.otherwise({
			templateUrl : "partials/main.html"
		})
	});
