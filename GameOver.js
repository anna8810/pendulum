Pendulum.GameOver = function(game) {}

Pendulum.GameOver.prototype = {
	
	create: function() {
		// Background
		startBG = this.add.image(0, 0, "startScreen");
		//startBG.inputEnabled = true;
		//startBG.events.onInputDown.addOnce(this.startGame, this);
		
		// Adding text !!!HATA CENTRERA I X-LED!!!!
		startPrompt = this.add.bitmapText(this.world.centerX-200, this.world.centerY, "eightbitwonder", "Game Over", 50);
		//startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, "eightbitwonder", "Click to start again", 20);

		// Buttons
		restart = this.add.button(this.world.width/2, this.world.centerY+150, "restart", this.restart, this);
		restart.anchor.setTo(0.5, 0.5);
		menu = this.add.button(this.world.width/2, this.world.centerY+250, "menu", this.menu, this);
		menu.anchor.setTo(0.5, 0.5);
	},

	restart: function() {
		this.state.start("Level1");
		//this.state.start("StartMenu");
	},

	menu: function() {
		// Game on!
		this.state.start("StartMenu");
	}
}