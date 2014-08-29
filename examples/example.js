angular.module('someApp', ['angularDjangoCsrf']).controller('SomeCtrl', function($http, $cookies){
  $cookies['csrftoken'] = 'HARLO!';
  $http.post('dsjaklds', {}).catch(function(req){
    console.log(req.config.headers['X-CSRFToken']);
  });
});