var Pendulum = {};

Pendulum.Boot = function() {};

Pendulum.Boot.prototype = {

	preload: function() {

		// Loading bar - just for fun!
		this.load.image("preloadBar", "images/loadBar.png");
	},

	create: function() {
		// Shows all even if size is strange?
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		// Minimun size of game 
		this.scale.minWidth = 512;
		this.scale.minHeight = 300;

		// Maximum size of game
		this.scale.maxWidth = 1024;
		this.scale.maxHeight = 600;

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