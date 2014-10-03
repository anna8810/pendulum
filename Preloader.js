Pendulum.Preloader = function(game) {
//	this.preloadBar = null;
//	this.ready = false;
}

Pendulum.Preloader.prototype = {

	preload: function() {
		// Load images for title
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, "preloadBar");
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);

		// Backgrounds
		this.load.image("startScreen", "images/backgrounds/startBG.jpg");
		this.load.image("Level1BG", "images/backgrounds/1green.jpg");
		this.load.image("Level2BG", "images/backgrounds/1blue.jpg");		
		this.load.image("Level3BG", "images/backgrounds/1red.jpg");

		// Text
		this.load.image("title", "images/text/pendulum.png");
		this.load.image("click", "images/text/click_to_start.png");
		this.load.image("menu", "images/text/menu.png");
		this.load.image("winning", "images/text/winning.png");
		this.load.image("over", "images/text/game_over.png");
		this.load.image("next", "images/text/next_level.png");
		this.load.image("restart", "images/text/restart.png");

		this.load.image("left", "images/left.png");
		this.load.image("right", "images/right.png");
		
		// Pendulum
		this.load.image("tail", "images/svans.png");
		this.load.image("head", "images/head2.png");

		// Obstacels
		this.load.image("rectangle", "images/rectangle.png");	
	},

	create: function() {
		this.preloadBar.cropEnabled = false;
	},

	update: function() {
		this.ready = true;

		// Start the start menu state
		this.state.start("StartMenu");

		// Shortcuts! 
		//this.state.start("Level1");
		//this.state.start("GameOver");
		//this.state.start("GameWon");

	}
}