Pendulum.GameWon = function(game) {}

Pendulum.GameWon.prototype = {

	init: function(level) {
		console.log("Level: " + level);
	},
	
	create: function() {
		// Background
		startBG = this.add.image(0, 0, "startScreen");

		// Text
		winning = this.add.image(this.world.width/2, this.world.height/2, "winning");
		winning.anchor.setTo(0.5, 0.5);
		
		// Adding text !!!HATA CENTRERA I X-LED!!!!
		//winning = this.add.bitmapText(this.world.centerX-175, this.world.centerY, "eightbitwonder", "You Won!", 50);

		// Buttons
		restart = this.add.button(this.world.width/2-200, this.world.centerY+120, "restart", this.restart, this);
		restart.anchor.setTo(0.5, 0.5);
		next = this.add.button(this.world.width/2+150, this.world.centerY+120, "next", this.next, this);
		next.anchor.setTo(0.5, 0.5);
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