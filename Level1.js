Pendulum.Level1 = function(game) {
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
}

Pendulum.Level1.prototype = Object.create(Pendulum.Game.prototype);
Pendulum.Level1.prototype.constructor = Pendulum.Level1;


Pendulum.Level1.prototype.buildLevel = function() {
	// Debugging
	//console.log("Level1.buildWorld");

	level = 1;

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level1BG");	
	this.speed = 1;  

	this.time.events.add(Phaser.Timer.SECOND * 2, this.blinkRight, this);
	this.time.events.add(Phaser.Timer.SECOND * 7, this.blinkLeft, this);
	this.time.events.add(Phaser.Timer.SECOND * 12, this.blinkRight, this);
	this.time.events.add(Phaser.Timer.SECOND * 17, this.blinkLeft, this);
	this.time.events.add(Phaser.Timer.SECOND * 22, this.blinkRight, this);
}

Pendulum.Level1.prototype.blinkRight = function () {
	// Debugging
	//console.log("BLINK RIGHT");

	buttonRight.alpha = 0;
	this.add.tween(buttonRight).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 8, true);
}
Pendulum.Level1.prototype.blinkLeft = function () {
	// Debugging
    //console.log("BLINK LEFT");

	buttonLeft.alpha = 0;
	this.add.tween(buttonLeft).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 0, 8, true);
}

Pendulum.Level1.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Level1.buildObstacles");

	// Total amount of obstacles
	obstaclesTotal = 5;
	// Uglyhack
	obstaclePassed = 1-obstaclesTotal;//*(-1)+1;

	left = true; 

	var o;

	for(var i=0; i<obstaclesTotal; ++i) {
		// DEBUGGING
		//console.log(i);
		//console.log(i)

		if(left) {
			o = obstacles.create(-231+20, -300*i, "rectangle");
			left = false;
		}
		else {
			o = obstacles.create(0-20, -300*i, "rectangle");
			left = true;
		}

		o.checkWorldBounds = true;
		o.events.onOutOfBounds.add(this.obstaclePassed, this);
	}
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level1.prototype.render = function() {}


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