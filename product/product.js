'use strict';

angular.module("myApp.product", [])
    .controller("Product", function($scope,$http)
    {
        $http.get("json/product.json")
        .then(function(response){
            $scope.ProductList = response.data;
            console.log(response.data);
        })
    });