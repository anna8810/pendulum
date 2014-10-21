Pendulum.Levels = function(game) {}

Pendulum.Levels.prototype = {

	create: function() {
		// Background and text
		startBG = this.add.image(0, 0, "startScreen");

		select = this.add.image(this.world.width/2, this.world.height/4, "select");
		select.anchor.setTo(0.5, 0.5);

		// Buttons
		one = this.add.button(this.world.width/2, this.world.height/4 + 140, "one", this.level, this);
		one.anchor.setTo(0.5, 0.5);
		one.variable = 1;
		two = this.add.button(this.world.width/2, this.world.height/4 + 210, "two", this.level, this);
		two.anchor.setTo(0.5, 0.5);
		two.variable = 2;
		three = this.add.button(this.world.width/2, this.world.height/4 + 280, "three", this.level, this);
		three.anchor.setTo(0.5, 0.5);
		three.variable = 3;
		four = this.add.button(this.world.width/2, this.world.height/4 + 350, "four", this.level, this);
		four.anchor.setTo(0.5, 0.5);
		four.variable = 4;

		back = this.add.button(0, this.world.height-60, "back", this.back, this);
	}, 

	level: function(l) {
		// Debugging
		//console.log(l.variable);
		
		this.state.start("Level" + l.variable);
	},

	back: function() {
		this.state.start("StartMenu");
	}
}