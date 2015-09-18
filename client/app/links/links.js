angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.getLinks = function () {
    Links.findLinks().then(function (links) {
      console.log(links);
      $scope.data.links = links;
    });
  };
  $scope.getLinks();

});
