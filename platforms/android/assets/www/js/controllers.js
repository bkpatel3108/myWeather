var mainModule = angular.module('mainModule', ['ngResource','ngCordova','angularReverseGeocode','mainFactory','mainService']);

mainModule.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

mainModule.controller('CitiesCtrl', function($scope,Cities,StorageService) {
  $scope.cities = Cities;
  $scope.allCities = Cities.all();

  $scope.things = StorageService.getAll();
  $scope.add = function (newThing) {
    StorageService.add(newThing);
  };
  $scope.remove = function (thing) {
    StorageService.remove(thing);
  };
  $scope.clearAll = function() {
    console.log("clearAll 1");
    StorageService.clearAll();
    $scope.things = StorageService.getAll();
  };

})

mainModule.controller('CityCtrl', function($scope, $ionicPopup,$stateParams,Cities,weatherServ,$cordovaSocialSharing,locationServ,StorageService) {

  $scope.doRefresh = function(){
    console.log('inside refresh');
    console.log('scope latitude'+$scope.latitude);
    console.log('scope latitude'+$scope.longitude);

    var myDataPromise = locationServ.getCurrentLocation($scope);
    myDataPromise.then(function($scope) {
      if(!(angular.isUndefined( $scope.latitude)) &&  !($scope.latitude === null))
      {
        weatherServ.getWeatherData($scope);
      }
    });

  $scope.$broadcast('scroll.refreshComplete');
};



$scope.shareAnywhere = function() {
  navigator.screenshot.save((function(e, r) {
    if (e) {
      $ionicPopup.alert({
        title: 'Error!',
        template: 'Screenshot unsuccessful'
      });
    } else {
      // $ionicPopup.confirm({
      //   title: 'Screenshot successful',
      //   template: 'Click OK to share'
      // }).then(function(res) {
      //   if (res) {
          $cordovaSocialSharing.share("Today's temperature is : "+$scope.current.currently.temperature, "This is Today's Weather info" , 'file://' + r.filePath, null);
          //window.plugins.socialsharing.share(null, null, 'file://' + r.filePath);
      //   } else {
      //     $ionicPopup.alert({
      //       title: 'Error!',
      //       template: 'Could not share'
      //     });
      //   }
      // });
    }
  }), 'jpg', 50, 'randomScreenshot');
};

var cityId = $stateParams.cityId;
var showData = false;
$scope.screenMessage = "Loading data... Please wait.";

console.log(cityId);
var cityName, latitude, longitude;
if(cityId != null)
{
  console.log('inside specified city');
  $scope.cityId = cityId;
  $scope.city = Cities.get(cityId);

  latitude  = $scope.city.lat; //latitude
  longitude  = $scope.city.lgn; //longitude
  cityName = $scope.city.name; //city name

  $scope.latitude = latitude;
  $scope.longitude = -longitude;
  $scope.showData = true;
  if(!(angular.isUndefined( $scope.latitude)) &&  !($scope.latitude === null))
  {
    weatherServ.getWeatherData($scope);
  }
}
else {
  console.log('inside current city');
  var myDataPromise = locationServ.getCurrentLocation($scope);
  myDataPromise.then(function($scope) {
    if(!(angular.isUndefined( $scope.latitude)) &&  !($scope.latitude === null))
    {
      console.log('scope latitude'+$scope.latitude);
      console.log('scope latitude'+$scope.longitude);
      weatherServ.getWeatherData($scope);
    }
  });

}


// add remove
$scope.things = StorageService.getAll();
$scope.add = function (newThing) {
  StorageService.add(newThing);
};
$scope.remove = function (thing) {
  StorageService.remove(thing);
};


})

;
