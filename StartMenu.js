Pendulum.StartMenu = function(game) {

	this.startBG;
	this.startPrompt;
}

Pendulum.StartMenu.prototype = {
	
	create: function() {
		startBG = this.add.image(0, 0, "startScreen");
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
		startPrompt = this.add.bitmapText(this.world.centerX-200, this.world.centerY, "eightbitwonder", "PENDULUM", 50);
		startPrompt = this.add.bitmapText(this.world.centerX-120, this.world.centerY+180, "eightbitwonder", "Click to start", 20);
	},

	startGame: function(pointer) {
		this.state.start("Level1");
	}
}