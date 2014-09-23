Pendulum.Level2 = function(game) {
	var speed;
};

Pendulum.Level2.prototype = Object.create(Pendulum.Game.prototype);
Pendulum.Level2.prototype.constructor = Pendulum.Level2;

Pendulum.Level2.prototype.buildWorld = function() {

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level2BG");	

	// Debugging
	console.log("Level2.buildWorld");

	this.speed = 2; 
};

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level1.prototype.render = function() {};