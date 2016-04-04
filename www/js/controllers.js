angular.module('starter.controllers', ['pharmacyapp', 'starter.services'])

.controller('DashCtrl', function($scope,$http) {
	
	$http.get('data/test.json')
      .success(function (data) {
        //$scope.tasks = data;
       	$scope.drugs = data;
		//console.log($scope.drugs);
    });     
	
	/*$scope.searchValue = function(q) { 
              $scope.foundpreparats=[];    
              angular.forEach($scope.drugs, function(value, key) {
                if ( value.name.indexOf(q) > -1) {
                  $scope.foundpreparats.push({id:value.id,name:value.name,gorod:value.gorod,phone:value.phone,adres:value.adres, apteka:value.apteka, cena:value.cena,producer:value.producer});
                }
              });
		//console.log($scope.foundpreparats);
            }; */
	
	
	
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
