var mainService = angular.module('mainService',['mainFactory']);

mainService.service("weatherServ",function(weatherFctry){
  this.getWeatherData = function($scope)
  {
    console.log("inside get weather data");
    $scope.days = [];

    $scope.days[0] = new Date();
    $scope.days[1] = new Date();
    $scope.days[2] = new Date();
    $scope.days[3] = new Date();
    $scope.days[4] = new Date();
    $scope.days[5] = new Date();
    $scope.days[6] = new Date();
    $scope.days[7] = new Date();

    $scope.days[1].setDate($scope.days[1].getDate() + 1);
    $scope.days[2].setDate($scope.days[2].getDate() + 2);
    $scope.days[3].setDate($scope.days[3].getDate() + 3);
    $scope.days[4].setDate($scope.days[4].getDate() + 4);
    $scope.days[5].setDate($scope.days[5].getDate() + 5);
    $scope.days[6].setDate($scope.days[6].getDate() + 6);
    $scope.days[7].setDate($scope.days[7].getDate() + 7);

    weatherFctry.getCurrentWeather($scope.latitude,$scope.longitude).then(function(resp) {
      $scope.current = resp.data;
      console.log('GOT CURRENT', $scope.current);
      //debugger;
      $scope.showData = true;
    }, function(error) {

      //alert('Unable to get current conditions');
      console.error(error);
      $scope.screenMessage = "Error occured while fetching weather information";

    });

}

})

mainService.service("locationServ",function($q,$cordovaGeolocation){
  this.getCurrentLocation = function($scope)
  {
    console.log("inside get current location");
    $scope.screenMessage = "Loading Current Location...\nPlease wait...";
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    return $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {

      console.log('inside location>>function');
      $scope.screenMessage = "Got Location...\nProcessing...";

      $scope.latitude  = position.coords.latitude;
      $scope.longitude = position.coords.longitude;

      console.log('location>>latitude'+$scope.latitude);
      console.log('location>>longitude'+$scope.longitude);
      return $scope;
    }, function(err) {
      // error
      console.log('inside location>>function>>error');
      $scope.screenMessage = "Error occured while fetching location.\nAfter switching on location.\nPull to refresh...";
      return $scope;
    });
  }
})
;
