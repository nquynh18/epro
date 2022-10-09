'use strict';

angular.module("myApp.brand", [])
    .controller("brandcontrol", function($scope,$http)
    {
        $http.get("json/brand.json")
        .then(function(response){
            $scope.BrandList = response.data;
            console.log(response.data);
        })
    });