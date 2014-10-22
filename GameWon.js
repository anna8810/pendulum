Pendulum.GameWon = function(game) {}

Pendulum.GameWon.prototype = {
	
	create: function() {
		// Background and text
		startBG = this.add.image(0, 0, "startScreen");
		winning = this.add.image(this.world.width/2, this.world.height/2-100, "winning");
		winning.anchor.setTo(0.5, 0.5);

		yourScore = "Your score: " + nrOfPoints + " / " + pointsTotal;
		score = this.add.text(this.world.width/2, this.world.height/2-10, yourScore, {fill: "#FFF", font:"40px Segoe"});
		score.anchor.setTo(0.5, 0.5);

		// Buttons
		restart = this.add.button(this.world.width/2-200, this.world.centerY+120, "restart", this.restart, this);
		restart.anchor.setTo(0.5, 0.5);
		if(level < 4) {
			next = this.add.button(this.world.width/2+150, this.world.centerY+120, "next", this.next, this);
			next.anchor.setTo(0.5, 0.5);
		}	
		menu = this.add.button(this.world.width/2, this.world.centerY+250, "menu", this.menu, this);
		menu.anchor.setTo(0.5, 0.5);

		console.log(nrOfPoints);
	},

	restart: function() {
		this.state.start("Level" + level);
	},

	next: function() {
		level++;
		this.state.start("Level" + level);
	},

	menu: function() {
		this.state.start("StartMenu");
	}
}