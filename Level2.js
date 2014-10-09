Pendulum.Level2 = function(game) {
	/*
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
	*/
}

Pendulum.Level2.prototype = Object.create(Pendulum.Game.prototype);
//Pendulum.Level2.prototype.constructor = Pendulum.Level2;

Pendulum.Level2.prototype.buildLevel = function() {
	// Debugging
	//console.log("Level2.buildWorld");

	level = 2;
	this.speed = 1; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level2BG");	

	// Tutoring
	this.time.events.add(Phaser.Timer.SECOND * 2, this.blinkArrow, this);
}

Pendulum.Level2.prototype.blinkArrow = function () {
	rightSide.alpha = 0;
	leftSide.alpha = 0;
	this.add.tween(leftSide).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 5, true);
	
}

Pendulum.Level2.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Level1.buildObstacles");

	// Total amount of obstacles
	obstaclesTotal = 1;
	// Uglyhack
	obstaclePassed = 1-obstaclesTotal;

	o = obstacles.create(-10, -400, "rectangleL");

	o.checkWorldBounds = true;
	o.events.onOutOfBounds.add(this.obstaclePassed, this);
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level2.prototype.render = function() {};