'use strict';

angular.module("myApp.productdetail", [])
    .controller("ProductDetail", function($scope,$http,$routeParams,$filter)
    {
        $scope.productid = $routeParams.id;
        $http.get("json/product.json")
        .then(function(response)
        {
            var data = response.data;
            $scope.detail = $filter('filter')(data,{id: parseInt($scope.productid)}, true)[0];
            console.log($scope.detail);
        })
    })
