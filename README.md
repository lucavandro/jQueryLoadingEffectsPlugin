jQuery Loading Effects
=========

jQuery plugin to display page loading effects based on svg and js.


Setup
------
```html
<html>
	<head>
	   ...
	   <link rel="stylesheet" type="text/css" href="css/loadingEffects.css" />
	   <script src="js/snap.svg-min.js"></script>
	   <script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/jquery.loadingEffects.js"></script>
	</head>
```
or
```html
<html>
	<head>
	   ...
	   <link rel="stylesheet" type="text/css" href="css/loadingEffects.css" />
	   <script src="js/snap.svg-min.js"></script>
	   <script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/jquery.loadingEffects.js"></script>
		</head>
```


Usage
--------
* Markup
```html
<div id="loader" class="pageload"></div>
```
* js
```js
var loadingEffect = $('#loader').loadingEffect('circle').data('loadingEffect');
loadingEffect.start();
loadingEffect.end();
```

Thanks
==========
[Article on Codrops](http://tympanus.net/codrops/?p=18880)

[Demo](http://tympanus.net/Development/PageLoadingEffects/)

