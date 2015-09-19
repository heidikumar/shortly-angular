angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  $scope.addLink = function () {
    var newLink = $scope.newLink;
    Links.postLink(newLink).then(function (resp) {
      console.log('Go to Disneyland!');
      $location.href = 'http://localhost:3000/#/links';
      return resp;
    });
  };
  // Your code here
});
