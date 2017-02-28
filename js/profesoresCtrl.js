app.controller('profesoresCtrl', ['$scope', function($scope){
	
	$scope.setActive("mProfesores");

	$scope.inicio = 5;
	$scope.filtrando = "";

	$scope.personas = ["Carlos","Pedro","Maria","Susana","Melissa","Fernando","Hernando","Juan","Camila","Ubaldina","Jocelyn","Arlette","Dilcia","Andrea","Antonio","Jose","Alberto"];

}]);