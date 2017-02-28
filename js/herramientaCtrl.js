app.controller('herramientaCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){

	var codigo = $routeParams.codigo;

	$scope.setActive("mAlumnos");

	//mostrar texto en pantalla si se actualiza la bd

	$scope.actualizado = false;
	$scope.alumno = {};

	$scope.creando = false;

	if (codigo == "nuevo") {
		$scope.creando = true;
	}else{

		$http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).then(function(response) {

		// Si el numero de alumno no es correcto lleva a la pagina principal de alumnos
		if (response.data.err !== undefined) {
			window.location = "#!/herramientas";
			return;
		}

	    $scope.alumno = response.data;
	    });
	}

		$scope.guardarAlumno = function(){

			if ($scope.creando) {

				$http.post('php/servicios/alumnos.crear.php', $scope.alumno).then(function(response){
				if (response.data.err === false) {
					$scope.actualizado = true;

					setTimeout(function(){
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);
				};
			});

			}else{

				$http.post('php/servicios/alumnos.guardar.php', $scope.alumno).then(function(response){
					if (response.data.err === false) {
						$scope.actualizado = true;

						setTimeout(function(){
							$scope.actualizado = false;
							$scope.$apply();
						}, 3500);
					};	
				});
			}
		}
}]);