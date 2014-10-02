# Angular Django CSRF
> Creates an Angular $http interceptor which adds the csrf token for Django use

## Install
```sh
$ bower install angular-django-csrf
```

## Usage
- Make sure the angular-django-csrf.js file is added to your `index.html`
- Add the "angularDjangoCsrf" module to the list of your app dependencies


Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-django-csrf/angular-django-csrf.js"></script>
```

And add `angularDjangoCsrf` as a dependency for your app:

```js
angular.module('myApp', ['angularDjangoCsrf']);
```
