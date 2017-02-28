app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/profesores',{
			templateUrl: 'parciales/profesores.html',
			controller: 'profesoresCtrl'
		})
		.when('/herramientas',{
			templateUrl: 'parciales/herramientas.html',
			controller: 'herramientasCtrl'
		})
		.when('/herramienta/:codigo',{
			templateUrl: 'parciales/herramienta.html',
			controller: 'herramientaCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});