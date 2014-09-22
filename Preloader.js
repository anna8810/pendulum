Pendulum.Preloader = function(game) {
	this.preloadBar = null;
	this.titleText = null;
	this.ready = false;
}

Pendulum.Preloader.prototype = {

	preload: function() {
		// Load images for title
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, "preloadBar");
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);

		// Load image and text for startscreen
		this.load.image("startScreen", "images/startBG.jpg");
		this.load.bitmapFont("eightbitwonder", "fonts/eightbitwonder.png", "fonts/eightbitwonder.fnt");

		// Load images for the game
		this.load.image("gameBG", "images/nebula-blue.jpg");
		this.load.image("center", "images/ball-purple.png");
		this.load.image("end", "images/ball-purple.png");
		this.load.image("rectangle", "images/rectangle.png");
	},

	create: function() {
		this.preloadBar.cropEnabled = false;
	},

	update: function() {
		this.ready = true;

		// Start the start menu
		this.state.start("StartMenu");

		// Shortcut direct to game!
		//this.state.start("Game");
	}
}