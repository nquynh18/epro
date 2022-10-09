'use strict';

angular.module("myApp.about", [])
    .controller("about", function($scope,$http)
    {
        $http.get("json/about.json")
        .then(function(response){
            $scope.AboutList = response.data;
            console.log(response.data);
        })
    });