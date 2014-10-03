var Pendulum = {};

Pendulum.Boot = function() {};

Pendulum.Boot.prototype = {

	preload: function() {

		// Loading bar - just for fun!
		this.load.image("preloadBar", "images/loadBar.png");
	},

	create: function() {

		if (this.game.device.desktop) {
			// Debugging
			//console.log("On desctop");
		}
		else {
			// Debugging
			//console.log("On other device");
			this.scale.maxWidth = 320;
			this.scale.maxHeight = 188;
		
		}

		// Center game
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		// Force screen size
		this.scale.setScreenSize(true);

		// Add input
		this.input.addPointer();
		this.input.addPointer();

		// Start the preloader
		this.state.start("Preloader");
	}
}