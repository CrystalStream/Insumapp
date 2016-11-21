angular.module('insumapp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl : "partials/main.html",
			controller  : "MainController"
		})
		.when('/proveedor/:id', {
			templateUrl : "partials/view.html",
			controller  : "ViewController"
		})
		.otherwise({
			templateUrl : "partials/main.html"
		})
	});
