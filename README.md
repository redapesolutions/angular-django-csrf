Angular Django CSRF
===================

Creates an Angular $http interceptor which adds the csrf token for Django use

Install
-------

```
  bower install angular-django-csrf
```

Usage
-----

- Make sure the angular-django-csrf.js file is added to your index
- Add the "angularDjangoCsrf" module to the list of your app dependencies
- Set the interceptor on $httpProvider

'djangoPost'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('djangoPostCsrf');
  })