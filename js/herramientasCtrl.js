app.controller('herramientasCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	//declaramos alumnos que conteniene todos los alumnos de la bd

	$scope.alumnos = {};

	// creamos una bandera llamada posicion iniciada con 5

	$scope.posicion = 15;

	//Cogemos la info de alumnos.listado.php convertido en json

	$http.get('php/servicios/alumnos.listado.php')
	.then(function(response) {
	    // Todo BIEN, la información viene en la respuesta.
	    $scope.alumnos = response.data;
	});

	$scope.siguientes = function(){

		if ($scope.alumnos.length > $scope.posicion){
			$scope.posicion += 15;
		};
	}
	$scope.anteriores = function(){

		if ($scope.posicion > 15){
			$scope.posicion -= 15;
		};
	}

}]);