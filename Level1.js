Pendulum.Level1 = function(game) {
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
};

Pendulum.Level1.prototype = Object.create(Pendulum.Game.prototype);
Pendulum.Level1.prototype.constructor = Pendulum.Level1;


Pendulum.Level1.prototype.buildLevel = function() {

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level1BG");	

	// Debugging
	//console.log("Level1.buildWorld");

	this.speed = 2; 
};


Pendulum.Level1.prototype.buildObstacles = function() {
	//console.log("Level1.buildObstacles");

	obstaclesTotal = 5;
	// Ugly hack
	obstaclePassed = obstaclesTotal*(-1)+1;

	// Create obstacle group
	obstacles = this.add.group();

	// Add physics for collision
	obstacles.enableBody = true;
	obstacles.physicsBodyType = Phaser.Physics.ARCADE;

	obstacles.x = this.world.width/2;

	left = true; 

	var o;

	for(var i=0; i<obstaclesTotal; ++i) {
		// DEBUGGING
		//console.log(i);
		//console.log(i)

		if(left) {
			o = obstacles.create(-231, -200*i, "rectangle");
			left = false;
		}
		else {
			o = obstacles.create(0, -200*i, "rectangle");
			left = true;
		}

		o.checkWorldBounds = true;
		o.events.onOutOfBounds.add(this.obstaclePassed, this);

		//console
	};
};
/*
Pendulum.Level1.prototype.obstaclePassed = function(o) {
	obstaclePassed++;

	console.log(obstaclePassed);

	if(obstaclePassed == obstaclesTotal)
	{
		console.log("WINNING");
		this.state.start("GameWon");
	};
};
*/

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level1.prototype.render = function() {};


/* VARFÖR KAN JAG INTE SKRIVA SÅHÄÄÄR?
Pendulum.Level1.prototype = {

	buildWorld: function() {

		// Backgorund as tileSprite to have continuously moving background
		BG = this.add.tileSprite(0, 0, 1024, 600, "gameBG");	

		console.log("Leve1.buildWorld");

		this.speed = 5;

	}, 

	preload: function() {}
}
*/