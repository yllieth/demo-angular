'use strict';

angular.module('demoAngularApp', []);
angular.module('demoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.new = {};
    
    $scope.list = [
      {firstname: "Sylvain", lastname: "Ragot", company: "PredicSis"},
      {firstname: "John", lastname: "Doe", company: "Acme"},
      {firstname: "Jane", lastname: "Smith", company: ""}
    ];
    
    $scope.add = function() {
      $scope.list.push($scope.new);
    };
  });
