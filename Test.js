Pendulum.Test = function(game) {
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
}

Pendulum.Test.prototype = Object.create(Pendulum.Game.prototype);

Pendulum.Test.prototype.buildLevel = function() {

	level = 1;
	this.speed = 1; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level3BG");	
}

Pendulum.Test.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Level1.buildObstacles");

	// Total amount of obstacles
	obstaclesTotal = 1;
	// Uglyhack
	obstaclePassed = 1-obstaclesTotal;

	o = obstacles.create(-240, -400, "rectangleL");

	o.checkWorldBounds = true;
	o.events.onOutOfBounds.add(this.obstaclePassed, this);
}

Pendulum.Test.prototype.buildPoints = function(points) {
	// Debugging
	console.log("buildPoints");
	//console.log("Wich device? " + this.help);

	pointsTotal = 10; 
	var p; 
	for(var i=0; i<pointsTotal; i++) {
		console.log("in test budPoints if statement");
		console.log(Math.sin(i*(Math.PI)/10)*100);
		p = this.add.sprite(Math.sin(i*(Math.PI)/10)*140, 300-i*100, "test");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("t", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("t", 20, true);
		p.scale.set(0.15);
		points.add(p);
	}
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Test.prototype.render = function() {}