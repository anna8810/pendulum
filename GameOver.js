Pendulum.GameOver = function(game) {}

Pendulum.GameOver.prototype = {

	init: function(level) {
		console.log("Level: " + level);
	},
	
	create: function() {
		// Background
		startBG = this.add.image(0, 0, "startScreen");
		
		//Text
		over = this.add.image(this.world.width/2, this.world.height/2, "over");
		over.anchor.setTo(0.5, 0.5);
		
		// Adding text !!!HATA CENTRERA I X-LED!!!!
		//startPrompt = this.add.bitmapText(this.world.centerX-200, this.world.centerY, "eightbitwonder", "Game Over", 50);
		//startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, "eightbitwonder", "Click to start again", 20);

		// Buttons
		restart = this.add.button(this.world.width/2, this.world.centerY+100, "restart", this.restart, this);
		restart.anchor.setTo(0.5, 0.5);
		menu = this.add.button(this.world.width/2, this.world.centerY+250, "menu", this.menu, this);
		menu.anchor.setTo(0.5, 0.5);

		//score = this.state.states['endGameScreen'].score;
		//console.log(score);
	},

	restart: function() {
		this.state.start("Level" + level);
		//this.state.start("StartMenu");
	},

	menu: function() {
		// Game on!
		this.state.start("StartMenu");
	}
}