angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  $scope.addLink = function () {

    Links.postLink().then(function (resp) {
      return resp;
      //do we need a response?
    });
    // Links.findLinks().then(function (links) {
    //   console.log(links);
    //   $scope.data.links = links;
    // });
  };
  // Your code here
});
