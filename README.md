jQuery Loading Effects
=========

jQuery plugin to display page loading effects based on svg and js.


Setup
------
```html
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
<head>
   ...
   <link rel="stylesheet" type="text/css" href="css/loadingEffects.css" />
   <script src="js/jquery-1.11.1.min.js"></script>
   <script src="js/jquery.loadingEffects.bundle.min.js"></script>
</head>
```


Usage
--------
* Markup
```html
<div id="loader" class="pageload">
	<div class="pageload-content"> Place your content here.</div>
</div>
```
* js
```js
var loadingEffect = $('#loader').loadingEffect('circle').data('loadingEffect');
loadingEffect.start();
loadingEffect.end();
```


Extras
-------
* Vertical center your pageload-content
```html
<div id="loader" class="pageload">
	<div class="pageload-content verical-centered"> Place your content here.</div>
</div>
```
* Add nice animation
```html
<div id="loader" class="pageload pageload-dots">
	<div class="pageload-content"></div>
</div>
```

Thanks
==========
[Article on Codrops](http://tympanus.net/codrops/?p=18880)
