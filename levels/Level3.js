Pendulum.Level3 = function(game) {
/*	
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
*/
}

Pendulum.Level3.prototype = Object.create(Pendulum.Game.prototype);
//Pendulum.Level3.prototype.constructor = Pendulum.Level3;

Pendulum.Level3.prototype.buildLevel = function() {
	// Debugging
	console.log("Level3.buildWorld");

	level = 3;
	this.speed = 2; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level3BG");	
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
			o = obstacles.create(-250 + 50, -500*i, "Hrectangle");
			left = false;
		}
		else {
			o = obstacles.create(0 - 50, -500*i, "Hrectangle");
			left = true;
		}

		o.checkWorldBounds = true;
		o.events.onOutOfBounds.add(this.obstaclePassed, this);
	}
}

Pendulum.Level3.prototype.buildPoints = function(points) {
	// Debugging
	//console.log("Level3.buildPoints");

	pointsTotal = 26; 
	var p; 
	for(var i=0; i<pointsTotal; i++) {

		p = this.add.sprite((Math.sin((i*Math.PI)/5))*140, 300-i*100, "point");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("p", 20, true);
		p.scale.set(0.15);
		points.add(p);
	}
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level3.prototype.render = function() {}