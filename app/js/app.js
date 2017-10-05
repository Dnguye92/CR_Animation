var CR_Animation = angular.module('CR_Animation', [
	'ngRoute'
]);

CR_Animation.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: './views/home.html'
	})
	.when('/youtube', {
		templateUrl: './views/youtube.html'
	})
	.when('/htmlVid', {
		templateUrl: './views/html5vid.html'
	})
}]);