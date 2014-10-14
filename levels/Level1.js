Pendulum.Level1 = function(game) {
/*
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
*/
}

Pendulum.Level1.prototype = Object.create(Pendulum.Game.prototype);
//Pendulum.Level1.prototype.constructor = Pendulum.Level1;

Pendulum.Level1.prototype.buildLevel = function() {
	// Debugging
	//console.log("Level1.buildLevel");

	level = 1;
	this.speed = 1; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level1BG");	
	
	// Tutoring
	this.time.events.add(Phaser.Timer.SECOND * 2, this.blinkArrow, this);
}

Pendulum.Level1.prototype.blinkArrow = function () {
	rightSide.alpha = 0;
	leftSide.alpha = 0;
	this.add.tween(rightSide).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 5, true);	
}

Pendulum.Level1.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Level1.buildObstacles");

	// Total amount of obstacles
	obstaclesTotal = 1;
	// Uglyhack
	obstaclePassed = 1-obstaclesTotal;

	o = obstacles.create(-240, -400, "VrectangleL");

	o.checkWorldBounds = true;
	o.events.onOutOfBounds.add(this.obstaclePassed, this);
}

Pendulum.Level1.prototype.buildPoints = function(points) {
	// Debugging
	//console.log("Level1.buildPoints");

	pointsTotal = 10; 
	var p; 
	for(var i=0; i<pointsTotal; i++) {
		
		p = this.add.sprite(Math.sin(i*(Math.PI)/10)*140, 300-i*100, "point");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("p", 20, true);
		p.scale.set(0.15);
		points.add(p);
	}
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level1.prototype.render = function() {}