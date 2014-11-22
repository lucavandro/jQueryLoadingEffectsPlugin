
;(function ( $, window, document, undefined ) {

		
		var pluginName = 'loadingEffect';
		var	defaults = {
			effect: 'lazyStretch'
		};

		var effects = {
			lazyStretch: {
				initialPath : 'M30,30 50,30 50,30 30,30 Z',
				openingSteps: "M20,15 50,30 50,30 30,30 Z;M0,0 80,0 50,30 20,45 Z;M0,0 80,0 60,45 0,60 Z;M0,0 80,0 80,60 0,60 Z".split(';'),
				closingSteps:"M0,0 80,0 60,45 0,60 Z;M0,0 80,0 50,30 20,45 Z;M20,15 50,30 50,30 30,30 Z;M30,30 50,30 50,30 30,30 Z".split(';'),
				speedIn: 200,
				easingIn : mina.linear
			},
			circle: {
				initialPath : 'M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z',
				openingSteps: "M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z".split(';'),
				speedIn : 300, 
				easingIn : mina.easeinout
			},
			spill: {
				initialPath : "M 0,0 c 0,0 -16.5,43.5 0,60 16.5,16.5 80,0 80,0 L 0,60 Z",
				openingSteps: "M 0,0 c 0,0 63.5,-16.5 80,0 16.5,16.5 0,60 0,60 L 0,60 Z".split(';'),
				speedIn : 400, 
				easingIn : mina.easeinout
			},
			frameIt: {
				initialPath : "M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z",
				openingSteps: "M 0,0 0,60 80,60 80,0 Z M 40,30 40,30 40,30 40,30 Z".split(';'),
				speedIn : 300, 
				easingIn : mina.easeinout
			},
			tunnelVision: {
				initialPath : "M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 -25.6875 C 70.750092 -25.6875 95.6875 -0.7500919 95.6875 30 C 95.6875 60.750092 70.750092 85.6875 40 85.6875 C 9.2499078 85.6875 -15.6875 60.750092 -15.6875 30 C -15.6875 -0.7500919 9.2499078 -25.6875 40 -25.6875 Z",
				openingSteps: "M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 29.96875 C 40.01804 29.96875 40.03125 29.98196 40.03125 30 C 40.03125 30.01804 40.01804 30.03125 40 30.03125 C 39.98196 30.03125 39.96875 30.01804 39.96875 30 C 39.96875 29.98196 39.98196 29.96875 40 29.96875 Z".split(';'),
				speedIn : 300, 
				easingIn : mina.easeinout
			},
			windscreenWiper: {
				initialPath : "M 40,100 150,0 l 0,0 z",
				openingSteps: "M 40,100 150,0 -65,0 z".split(';'),
				speedIn : 400, 
				easingIn : mina.easeinout
			},
			jammedBlind:{
				initialPath : "m 0,60 80,0 0,0 -80,0",
				openingSteps: "M 0,60 80,60 80,50 0,40 0,60;M 0,60 80,60 80,25 0,40 0,60;M 0,60 80,60 80,25 0,10 0,60;M 0,60 80,60 80,0 0,0 0,60".split(';'),
				closingSteps: "M 0,60 80,60 80,20 0,0 0,60;M 0,60 80,60 80,20 0,40 0,60;m 0,60 80,0 0,0 -80,0".split(';'),
				speedIn : 200, 
				easingIn : mina.linear
			},
			parallelogram:{
				initialPath : "M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z",
				openingSteps:"M 0,0 0,60 80,60 80,0 z M 80,0 40,30 0,60 40,30 z".split(';'),
				speedIn : 300, 
				speedOut : 600, 
				easingIn : mina.easeinout, 
				easingOut : mina.bounce
			},
			tilted:{
				initialPath : "M 0,70 80,60 80,80 0,80 0,70",
				openingSteps:"M 0,0 80,-10 80,60 0,70 0,0".split(';'),
				closingSteps:"M 0,-10 80,-20 80,-10 0,0 0,-10".split(';'),
				speedIn : 400, 
				easingIn : mina.easeinout 
			},
			lateralSwipe:{
				initialPath : "M 40,-65 145,80 40,-65",
				openingSteps:"M 40,-65 145,80 -65,80 40,-65".split(';'),
				closingSteps:"m 40,-65 0,0 L -65,80 40,-65".split(';'),
				speedIn : 500, 
				easingIn : mina.easeinout  
			},
			wave:{
				initialPath : "m -5,-5 0,70 90,0 0,-70 z m 5,5 c 0,0 7.9843788,0 40,0 35,0 40,0 40,0 l 0,60 c 0,0 -3.944487,0 -40,0 -30,0 -40,0 -40,0 z",
				openingSteps: "m -5,-5 0,70 90,0 0,-70 z m 5,35 c 0,0 15,20 40,0 25,-20 40,0 40,0 l 0,0 C 80,30 65,10 40,30 15,50 0,30 0,30 z".split(';'),
				speedIn : 400, 
				easingIn : mina.easeinout			
			},
			origami:{
				initialPath : "m -10,-10 0,80 100,0 0,-80 z M 40,-40.5 120,30 40,100 -40,30 z",
				openingSteps:"m -10,-10 0,80 100,0 0,-80 z m 50,-30.5 0,70.5 0,70 0,-70 z".split(';'),
				speedIn : 400, 
				easingIn : mina.easeinout					
			},
			curtain:{
				initialPath : "m 75,-80 155,0 0,225 C 90,85 100,30 75,-80 z",
				openingSteps:"m 40,-80 190,0 -305,290 C -100,140 0,0 40,-80 z".split(';'),
				speedIn : 700, 
				easingIn : mina.easeinout 				
			}

		};

		var effectDefault = {
			speedIn : 500,
			easingIn : mina.linear
		}

		
		function Plugin ( element, options ) {
				this.element = element;
				this.$el = $(element);
				this.settings = $.extend( {}, defaults, options );
				this.effect = $.extend({},effectDefault, effects[this.settings.effect] );
				
				// if data-closing is not defined then the path will animate to its original shape
				this.effect.closingSteps = this.effect.closingSteps || [this.effect.initialPath];
				
				if(this.settings.speedIn){
					this.effect.speedIn = this.settings.speedIn;
				}
				if(this.settings.speedOut){
					this.effect.speedOut = this.settings.speedOut;
				}


				if(this.settings.easingIn){
					this.effect.easingIn = this.settings.easingIn;
				}
				if(this.settings.easingOut){
					this.effect.easingOut = this.settings.easingOut;
				}


				if( !this.effect.speedOut ) {
					this.effect.speedOut = this.effect.speedIn;
				}
				if( !this.effect.easingOut ) {
					this.effect.easingOut = this.effect.easingIn;
				}
				
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
				init: function () {
						this.$el.addClass('pageload');
						// Get/create the svg element
						this.$svg = this.$el.find('svg').length > 0 ? 
									this.$el.find('svg').eq(0) : 
									$('<svg xmlns="http://www.w3.org/2000/svg"'+
										  ' width="100%" height="100%"'+
										  ' viewBox="0 0 80 60"'+
										  ' preserveAspectRatio="xMidYMid slice"></svg>').appendTo(this.$el);
						
						// Get/create the path element
						this.$svg.html('<path d="'+this.effect.initialPath+'"/>');

						// Does it work without this?
						this.snap = Snap( this.$svg.get(0) );
						this.path = this.snap.select( 'path' );
						
						this.isAnimating = false;


						
						

				},
				start: function () {
					if( this.isAnimating ) return false;
					this.isAnimating = true;
					
					// animate svg
					var self = this,
						onEndAnimation = function() {
							self.$el.addClass('pageload-loading' );
						};
					this._animateSVG( 'in', onEndAnimation );
					this.$el.addClass( 'show' );
				},
				end: function(){
					var self = this;
					this.$el.removeClass( 'pageload-loading' );
					this._animateSVG( 'out', function() { 
						// reset path
						self.path.attr( 'd', self.effect.initialPath );
						self.$el.removeClass( 'show' );
						self.isAnimating = false; 
					} );
				},
				_animateSVG: function(dir, callback){
					var self = this,
						pos = 0,
						steps = dir === 'out' ? this.effect.closingSteps : this.effect.openingSteps,
						stepsTotal = dir === 'out' ? this.effect.closingSteps.length : this.effect.openingSteps.length,
						speed = dir === 'out' ? self.effect.speedOut : self.effect.speedIn,
						easing = dir === 'out' ? self.effect.easingOut : self.effect.easingIn,
						nextStep = function( pos ) {
							if( pos > stepsTotal - 1 ) {
								if( callback && typeof callback == 'function' ) {
									callback();
								}
								return;
							}
							self.path.animate( { 'path' : steps[pos] }, speed, easing, function() { nextStep(pos); } );
							pos++;
						};

					nextStep(pos);
				}

		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
					$.data( this, pluginName, new Plugin( this, options ) );
			});

			// chain jQuery functions
			return this;
		};

})( jQuery, window, document );