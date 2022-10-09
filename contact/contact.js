'use strict';

angular.module("myApp.contact", [])
    .controller("contact", function($scope,$http)
    {
        $http.get("json/contact.json")
        .then(function(response){
            $scope.ContactList = response.data;
            console.log(response.data);
        })
    });