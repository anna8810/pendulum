Pendulum.Preloader = function(game) {}

Pendulum.Preloader.prototype = {

	preload: function() {
		// Load images for title
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, "preloadBar");
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);

		// Title background
		this.load.image("title", "images/text/pendulum.png");
		this.load.image("startScreen", "images/backgrounds/startBG.jpg");
		
		// Backgrounds
		this.load.image("Level1BG", "images/backgrounds/1orange.jpg");
		this.load.image("Level2BG", "images/backgrounds/1green.jpg");		
		this.load.image("Level3BG", "images/backgrounds/1yellow.jpg");
		this.load.image("Level4BG", "images/backgrounds/1blue.jpg");
		this.load.image("Level5BG", "images/backgrounds/1red.jpg");

		// StartMenu
		this.load.image("start", "images/text/start.png");
		this.load.image("levels", "images/text/levels.png");
		this.load.image("eternity", "images/text/eternity.png");
		this.load.image("credits", "images/text/credits.png");

		// Levels
		this.load.image("select", "images/text/select.png");
		this.load.image("one", "images/text/one.png");
		this.load.image("two", "images/text/two.png");
		this.load.image("three", "images/text/three.png");
		this.load.image("four", "images/text/four.png");

		// Credits
		this.load.image("made", "images/text/made.png");
		this.load.image("anna", "images/text/anna.png");

		// Winning and Game Over
		this.load.image("winning", "images/text/winning.png");
		this.load.image("over", "images/text/game_over.png");
		this.load.image("restart", "images/text/restart.png");
		this.load.image("next", "images/text/next_level.png");
		this.load.image("menu", "images/text/menu.png");
		this.load.image("hint", "images/text/hint.png");
		

		this.load.image("left", "images/left.png");
		this.load.image("right", "images/right.png");
		this.load.image("score", "images/text/score.png");
		this.load.image("back", "images/back.png");
		
		// Pendulum
		this.load.image("tail", "images/pendulum/tail.png");
		this.load.spritesheet("head", "images/pendulum/head.png", 40, 40);

		// Obstacels
		this.load.image("VrectangleL", "images/obstacles/VrectangleL.png");
		this.load.image("Vrectangle", "images/obstacles/Vrectangle.png");	
		this.load.image("HrectangleL", "images/obstacles/HrectangleL.png");
		this.load.image("Hrectangle", "images/obstacles/Hrectangle.png");	
		this.load.image("circle", "images/obstacles/circle.png");
		this.load.image("circleS", "images/obstacles/circleS.png");	
		this.load.image("square", "images/obstacles/square.png");

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
		//this.state.start("Level4");
		//this.state.start("GameOver");
		//this.state.start("GameWon");
	}
}