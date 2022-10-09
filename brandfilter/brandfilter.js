'use strict';

angular.module("myApp.brandfilter", [])
    .controller("brandfiltercontrol", function($scope,$http,$routeParams,$filter)
    {
        $scope.namebrand = $routeParams.name;
        $scope.title = $scope.namebrand;
        $scope.productorder = "name";
        $http.get("json/product.json")
        .then(function(response)
        {
            var data = response.data;
            $scope.brandlist=$filter('filter')(data,function(product){
				return $filter('filter')(product.brand, {name: $scope.namebrand}).length;
			});
            console.log($scope.brandlist);
            })
    })
    