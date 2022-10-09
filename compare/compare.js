'use strict';

angular.module("myApp.compare",[])
.controller("compare",function($scope,$http)
{
    $http.get("json/product.json")
    .then(function(response)
    {
        $scope.ProductsList = response.data;
        console.log(response.data);
    })
})