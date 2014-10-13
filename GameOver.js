Pendulum.GameOver = function(game) {}

Pendulum.GameOver.prototype = {

	init: function(level) {
		//console.log("Level: " + level);
	},
	
	create: function() {
		// Background and text
		startBG = this.add.image(0, 0, "startScreen");
		over = this.add.image(this.world.width/2, this.world.height/2-50, "over");
		over.anchor.setTo(0.5, 0.5);
		over.rotatation = 90;
	
		// Buttons
		restart = this.add.button(this.world.width/2, this.world.centerY+100, "restart", this.restart, this);
		restart.anchor.setTo(0.5, 0.5);
		menu = this.add.button(this.world.width/2, this.world.centerY+250, "menu", this.menu, this);
		menu.anchor.setTo(0.5, 0.5);

		if(level == 1 || level == 2) {
			 hint = this.add.image(this.world.width-250, 5, "hint");
		}
	},

	restart: function() {
		this.state.start("Level" + level);
	},

	menu: function() {
		this.state.start("StartMenu");
	}
}