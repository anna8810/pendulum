Pendulum.EternityOver = function(game) {}

Pendulum.EternityOver.prototype = {

	create: function() {
		// Debugging
		//console.log("EternityOver");

		// Background and text
		startBG = this.add.image(0, 0, "startScreen");		

		over = this.add.text(this.world.width/2, this.world.height/2-180, "Your score:", {fill: "#FFF", font:"80px Segoe"});
		over.anchor.setTo(0.5, 0.5);

		score = this.add.text(this.world.width/2, this.world.height/2-60, nrOfPoints, {fill: "#FFF", font:"100px Segoe"});
		score.anchor.setTo(0.5, 0.5);

		// Buttons
		restart = this.add.button(this.world.width/2, this.world.centerY+100, "restart", this.restart, this);
		restart.anchor.setTo(0.5, 0.5);
		menu = this.add.button(this.world.width/2, this.world.centerY+250, "menu", this.menu, this);
		menu.anchor.setTo(0.5, 0.5);

	},

	restart: function() {
		this.state.start("Eternity");
	},

	menu: function() {
		this.state.start("StartMenu");
	}
}