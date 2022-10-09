'use strict';

angular.module("myApp.quickview", [])
    .controller("quickview", function($scope,$http,$routeParams,$filter)
    {
        $scope.viewid = $routeParams.id;
        $http.get("json/product.json")
        .then(function(response)
        {
            var data = response.data;
            $scope.quickview = $filter('filter')(data,{id: parseInt($scope.viewid)}, true)[0];
            console.log($scope.quickview);
        })
    })

// 'use strict';

// var app = angular.module("myApp.quickview", ['ui.bootstrap']);

// app.controller("quickview", function($scope, $uibModal) {

//   $scope.open = function() {
//     var modalInstance =  $uibModal.open({
//       templateUrl: "quickview.html",
//       controller: "quickview",
//       size: '',
//     });
    
//     modalInstance.quickview.then(function(response){
//         $scope.quickview = '${response} button hitted';
//     });
    
//   };
// })
// angular.module('myApp', ['ui.bootstrap']);
// function TestCtrl($scope, $dialog, $http){
//   $scope.test = function(){
//      $http.get('test.json')
//         .success(function(data) {
//            $dialog.dialog({}).open('test.html');
//             $scope.items=data;
//             console.log(data);
//             alert(JSON.stringify(data));
//         });
//  }
//  }