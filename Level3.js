Pendulum.Level3 = function(game) {
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
}

Pendulum.Level3.prototype = Object.create(Pendulum.Game.prototype);
//Pendulum.Level3.prototype.constructor = Pendulum.Level3;

Pendulum.Level3.prototype.buildLevel = function() {
	// Debugging
	//console.log("Level3.buildWorld");

	level = 1;
	this.speed = 2; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level3BG");	
/*	
	// Tutoring
	this.time.events.add(Phaser.Timer.SECOND * 1, this.blinkRight, this);
	this.time.events.add(Phaser.Timer.SECOND * 9, this.blinkLeft, this);
	this.time.events.add(Phaser.Timer.SECOND * 17, this.blinkRight, this);
	this.time.events.add(Phaser.Timer.SECOND * 25, this.blinkLeft, this);
	this.time.events.add(Phaser.Timer.SECOND * 33, this.blinkRight, this);
*/
}

Pendulum.Level3.prototype.blinkRight = function () {
	// Debugging
	//console.log("BLINK RIGHT");
	rightSide.alpha = 0;
	leftSide.alpha = 0;
	this.add.tween(rightSide).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 5, true);
	
}
Pendulum.Level3.prototype.blinkLeft = function () {
	// Debugging
	//console.log("BLINK LEFT");

	rightSide.alpha = 0;
	leftSide.alpha = 0;
	this.add.tween(leftSide).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 5, true);
}

Pendulum.Level3.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Level3.buildObstacles");

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
			o = obstacles.create(-250 + 50, -500*i, "rectangle");
			left = false;
		}
		else {
			o = obstacles.create(0 - 50, -500*i, "rectangle");
			left = true;
		}

		o.checkWorldBounds = true;
		o.events.onOutOfBounds.add(this.obstaclePassed, this);
	}
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level3.prototype.render = function() {}