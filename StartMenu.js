Pendulum.StartMenu = function(game) {}

Pendulum.StartMenu.prototype = {
	
	create: function() {
		// Image and action when clicked
		startBG = this.add.image(0, 0, "startScreen");
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);

		// Text 
		title = this.add.image(this.world.width/2, this.world.height/2, "title");
		title.anchor.setTo(0.5, 0.5);
		click = this.add.image(this.world.width/2, this.world.height/2 + 150, "click");
		click.anchor.setTo(0.5, 0.5);
	},

	startGame: function(pointer) {
		// Game on!
		this.state.start("Level1");
	}
}