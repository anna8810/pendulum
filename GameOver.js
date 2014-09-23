Pendulum.GameOver = function(game) {}

Pendulum.GameOver.prototype = {
	
	create: function() {
		// Image for game over and action when clicked
		startBG = this.add.image(0, 0, "startScreen");
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
		// Adding text !!!HATA CENTRERA I X-LED!!!!
		startPrompt = this.add.bitmapText(this.world.centerX-200, this.world.centerY, "eightbitwonder", "Game Over", 50);
		startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, "eightbitwonder", "Click to start again", 20);
	},

	startGame: function(pointer) {
		// Game on!
		this.state.start("Level2");
	}
}