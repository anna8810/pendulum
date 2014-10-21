Pendulum.Credits = function(game) {}

Pendulum.Credits.prototype = {

	create: function() {
		// Background and text
		startBG = this.add.image(0, 0, "startScreen");
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.back, this);

		title = this.add.image(this.world.width/2, this.world.height/4, "title");
		title.anchor.setTo(0.5, 0.5);

		made = this.add.image(this.world.width/2, this.world.height/2+30, "made");
		made.anchor.setTo(0.5, 0.5);
		anna = this.add.image(this.world.width/2, this.world.height/2+170, "anna");
		anna.anchor.setTo(0.5, 0.5);

		back = this.add.image(0, this.world.height-60, "back");
	}, 

	back: function() {
		this.state.start("StartMenu");
	}
}