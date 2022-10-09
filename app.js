var myApp = angular.module("myApp", [
    'ngRoute',
    'myApp.product',
    'myApp.productdetail',
    'myApp.type',
    'myApp.typefilter',
    'myApp.brand',
    'myApp.brandfilter',
    'myApp.contact',
    'myApp.about',
    'myApp.compare',
    'myApp.quickview',
    'menu'
]);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/",{templateUrl:"product/product.html",controller:"Product"})
    .when("/product/:id",{templateUrl:"productdetail/productdetail.html",controller:"ProductDetail"})
    .when("/type/:name",{templateUrl:"typefilter/typefilter.html",controller:"typefiltercontrol"})
    .when("/brand/:name",{templateUrl:"brandfilter/brandfilter.html",controller:"brandfiltercontrol"})
    .when("/contact",{templateUrl:"contact/contact.html",controller:"contact"})
    .when("/about",{templateUrl:"about/about.html",controller:"about"})
    .when("/compare",{templateUrl:"compare/compare.html",controller:"compare"})
    .when("/quickview/:id",{templateUrl:"index.html",controller:"quickview"})
});

angular.module("menu", [])
.controller("MainCtrl",['$scope','$location','$route',function($scope, $location, $route) {
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function(){
        $scope.activePath = $location.path();
        console.log($location.path());
    })
}]);
