myApp.controller('ListController', ['$scope', '$http', function ($scope, $http) {
  console.log('ListController online');
   getHeroes();


  function getHeroes() {
    $http.get('/heroes')
      .then(function (response) {
    $scope.heroes = response.data;
    console.log('GET /heroes ', response.data);

  });
}
}]);
