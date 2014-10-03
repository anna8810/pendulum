Pendulum.Level2 = function(game) {
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
}

Pendulum.Level2.prototype = Object.create(Pendulum.Game.prototype);
Pendulum.Level2.prototype.constructor = Pendulum.Level2;

Pendulum.Level2.prototype.buildLevel = function() {
	// Debugging
	//console.log("Level2.buildWorld");

	level = 2;
	this.speed = 5; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level2BG");	
}

Pendulum.Level2.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Level1.buildObstacles");

	// Total amount of obstacles
	obstaclesTotal = 5;
	// Uglyhack
	obstaclePassed = 1-obstaclesTotal;

	left = true; 

	var o;
	for(var i=0; i<obstaclesTotal; ++i) {
		// DEBUGGING
		//console.log(i);

		if(left) {
			o = obstacles.create(-231-5, -300*i, "rectangle");
			left = false;
		}
		else {
			o = obstacles.create(0+5, -300*i, "rectangle");
			left = true;
		}

		o.checkWorldBounds = true;
		o.events.onOutOfBounds.add(this.obstaclePassed, this);
	}
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level2.prototype.render = function() {};