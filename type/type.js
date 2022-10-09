'use strict';

angular.module("myApp.type", [])
    .controller("typecontrol", function($scope,$http)
    {
        $http.get("json/type.json")
        .then(function(response){
            $scope.TypeList = response.data;
            console.log(response.data);
        })
    });