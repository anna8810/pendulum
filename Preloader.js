Pendulum.Preloader = function(game) {}

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
		this.load.image("Level3BG", "images/backgrounds/1yellow.jpg");

		// Text
		this.load.image("title", "images/text/pendulum.png");
		this.load.image("click", "images/text/click_to_start.png");
		this.load.image("menu", "images/text/menu.png");
		this.load.image("winning", "images/text/winning.png");
		this.load.image("over", "images/text/game_over.png");
		this.load.image("next", "images/text/next_level.png");
		this.load.image("restart", "images/text/restart.png");
		this.load.image("hint", "images/text/hint.png");

		this.load.image("left", "images/left.png");
		this.load.image("right", "images/right.png");
		
		// Pendulum
		this.load.image("tail", "images/pendulum/tail.png");
		this.load.spritesheet("head", "images/pendulum/head.png", 40, 40);

		// Obstacels
		this.load.image("rectangleL", "images/obstacles/rectangleL.png");
		this.load.image("rectangle", "images/obstacles/rectangle.png");	
		this.load.image("circle", "images/obstacles/circle.png");
		this.load.image("circleS", "images/obstacles/circleS.png");	

		// Point
		this.load.spritesheet("point", "images/smoke.png", 255, 255);
	},

	create: function() {
		this.preloadBar.cropEnabled = false;
	},

	update: function() {
		this.ready = true;

		// Start the start menu state
		this.state.start("StartMenu");

		// Shortcuts! 
		//this.state.start("Test");
		//this.state.start("Level1");
		//this.state.start("Level2");
		//this.state.start("Level3");
		//this.state.start("GameOver");
		//this.state.start("GameWon");

	}
}