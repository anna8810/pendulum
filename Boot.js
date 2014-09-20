var Pendulum = {};

Pendulum.Boot = function() {};

Pendulum.Boot.prototype = {

	preload: function() {
		this.load.image("preloadBar", "images/loadBar.png");
	},

	create: function() {

		// Number of pointers activated
		//this.input.maxPointers = 1;

		// Can pause the game if antoher tab opens up
		//this.stage.disableVisibilityChange = false;

		// Shows all even if size is strange?
		//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		// Minimun size of game 
		//this.scale.minWidth = 1024;
		//this.scale.minHeight = 600;

		// Center game
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		// Force portait
		//this.stage.forcePortrait = true;

		// Force screen size
		//this.scale.setScreenSize(true);

		// Add input
		this.input.addPointer();

		// Backgroundcolor of stage
		//this.stage.backgroundColor = "#171642";

		// Start the preloader
		this.state.start("Preloader");
	}
}