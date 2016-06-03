myApp.controller('HeroController', ['$scope', '$http', function ($scope, $http) {
  console.log('HeroController online');
  $scope.powers = [];
  $scope.currentHero = {};
  $scope.heroes = [];
  getHeroes();


  $scope.submitCurrentHero = function() {
        $http.post('/heroes', $scope.currentHero)
            .then(function() {
                console.log('POST /heroes');
                getHeroes();
            });
    };

    function getHeroes() {
      $http.get('/heroes')
        .then(function (response) {
      $scope.heroes = response.data;
      console.log('GET /heroes ', response.data);

    });
}


}]);
