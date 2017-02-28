var app = angular.module('universidadApp',['ngRoute', 'ui.mask']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";

  $scope.setActive = function(Opcion){

  		$scope.mInicio = "";
  		$scope.mProfesores = "";
  		$scope.mAlumnos = ""; 
  		
		// opcion seleccionada pasa a ser active
  		$scope[Opcion] = "active";


  }

}]);
