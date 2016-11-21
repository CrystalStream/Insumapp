angular.module('insumapp')

.controller('MainController', function($scope){
	$scope.items = ['Mama Coneja', 'Quesos el badon', 'Dulceria Esmeralda', 'Panes el Panadero', 'Libros el librero'];
})

.controller('ViewController', function($scope){
	$scope.name = "Christofer Flores";
})