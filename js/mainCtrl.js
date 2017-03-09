angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
    $scope.today = new Date();
    $scope.getMessage = (function(){
        messageService.getMessage().then(function(result) {
            $scope.messages = result.data;
        });
    });
   $scope.postMessage = function (message) {
       console.log(message);
       if(message){
           messageService.postData(message);
           $scope.message = "";
       }
   }
    setInterval(function(){
     $scope.getMessage();

   }, 1500)

})
