Pendulum.GameWon = function(game) {}

Pendulum.GameWon.prototype = {

	init: function(level) {
		console.log("Level: " + level);
	},
	
	create: function() {
		// Background
		startBG = this.add.image(0, 0, "startScreen");
		//startBG.inputEnabled = true;
		//startBG.events.onInputDown.addOnce(this.startGame, this);
		
		// Adding text !!!HATA CENTRERA I X-LED!!!!
		winning = this.add.bitmapText(this.world.centerX-175, this.world.centerY, "eightbitwonder", "You Won!", 50);

		// Buttons
		restart = this.add.button(this.world.width/2, this.world.centerY+150, "restart", this.next, this);
		restart.anchor.setTo(0.5, 0.5);
		restart = this.add.button(this.world.width/2, this.world.centerY+200, "restart", this.restart, this);
		restart.anchor.setTo(0.5, 0.5);
		menu = this.add.button(this.world.width/2, this.world.centerY+250, "menu", this.menu, this);
		menu.anchor.setTo(0.5, 0.5);
	},

	restart: function() {
		this.state.start("Level" + level);
		//this.state.start("StartMenu");
	},

	next: function() {
		level++;
		this.state.start("Level" + level);

	},

	menu: function() {
		// Game on!
		this.state.start("StartMenu");
	}
}