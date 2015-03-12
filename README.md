# angular-django-csrf
> creates an AngularJS [$http interceptor](https://docs.angularjs.org/api/ng/service/$http#interceptors) which adds the [CSRF](https://docs.djangoproject.com/en/dev/ref/csrf/) token for Django use

## Install
```sh
$ bower install angular-django-csrf
```

## Usage
- Make sure the `angular-django-csrf.js` file is added to your `index.html`
- Add the `angularDjangoCsrf` module to the list of your app dependencies
- Ensure that you have `ngCookies` loaded in your app as well


Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-cookies/angular-cookies.js"></script>
<script src="/bower_components/angular-django-csrf/angular-django-csrf.js"></script>
```

And add `angularDjangoCsrf` as a dependency for your app:

```js
angular.module('myApp', ['ngCookies', 'angularDjangoCsrf']);
```

## Dependencies
[`ngCookies`](https://docs.angularjs.org/api/ngCookies) is a required dependency of this module.
