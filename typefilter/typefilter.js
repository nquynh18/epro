'use strict';

angular.module("myApp.typefilter", [])
    .controller("typefiltercontrol", function($scope,$http,$routeParams,$filter)
    {
        $scope.nametype = $routeParams.name;
        $scope.title = $scope.nametype;
        $scope.productorder = "name";
        $http.get("json/product.json")
        .then(function(response)
        {
            var data = response.data;
            $scope.airlist=$filter('filter')(data,function(product){
				return $filter('filter')(product.type, {name: $scope.nametype}).length;
			});
            console.log($scope.airlist);
            })
    })
