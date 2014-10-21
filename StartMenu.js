Pendulum.StartMenu = function(game) {}

Pendulum.StartMenu.prototype = {
	
	create: function() {
		// Image and action when clicked
		startBG = this.add.image(0, 0, "startScreen");
		//startBG.inputEnabled = true;
		//startBG.events.onInputDown.addOnce(this.startGame, this);

		// Text 
		title = this.add.image(this.world.width/2, this.world.height/4, "title");
		title.anchor.setTo(0.5, 0.5);
		// Buttons
		start = this.add.button(this.world.width/2, this.world.height/4 + 140, "start", this.new, this);
		start.anchor.setTo(0.5, 0.5);
		levels = this.add.button(this.world.width/2, this.world.height/4 + 210, "levels", this.levels, this);
		levels.anchor.setTo(0.5, 0.5);
		//eternity = this.add.button(this.world.width/2, this.world.height/4 + 280, "eternity", this.eternity, this);
		//eternity.anchor.setTo(0.5, 0.5);
		credits = this.add.button(this.world.width/2, this.world.height/4 + 405, "credits", this.credits, this);
		credits.anchor.setTo(0.5, 0.5);
		
		
	},

	new: function() {
		this.state.start("Level1");
	},

	levels: function() {
		this.state.start("Levels");
	},

	eternity: function() {
		this.state.start("Eternity");
	},

	credits: function() {
		this.state.start("Credits");
	}
}