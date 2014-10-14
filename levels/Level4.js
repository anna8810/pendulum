Pendulum.Level4 = function(game) {
/*	
	var speed;
	var obstaclesTotal;
	var obstaclesPassed;
	var level;
*/	
}

Pendulum.Level4.prototype = Object.create(Pendulum.Game.prototype);
//Pendulum.Level3.prototype.constructor = Pendulum.Level3;

Pendulum.Level4.prototype.buildLevel = function() {
	// Debugging
	//console.log("Level4.buildLevel");

	level = 4;
	this.speed = 3; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "Level4BG");	
}

Pendulum.Level4.prototype.returnTotalPoints = function() {
	return pointsTotal;
}

Pendulum.Level4.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Level4.buildObstacles");

	// Total amount of obstacles
	obstaclesTotal = 6;
	// Uglyhack
	obstaclePassed = 1-obstaclesTotal;

	var array = [];
	circle = obstacles.create(0, -50, "circle");
	circle.scale.set(0.8);
	circle.anchor.setTo(0.5, 0.5);
	array.push(circle);
	array.push(obstacles.create(-450, -600, "HrectangleL"));
	array.push(obstacles.create(150, -600, "Vrectangle"));
	array.push(obstacles.create(-50, -1000, "HrectangleL"));
	array.push(obstacles.create(-250, -1000, "Vrectangle"));

	circle = obstacles.create(0, -1300, "circle");
	circle.scale.set(0.8);
	circle.anchor.setTo(0.5, 0.5);
	array.push(circle);

	for(var i=0; i<obstaclesTotal; i++) {
		array[i].checkWorldBounds = true;
		array[i].events.onOutOfBounds.add(this.obstaclePassed, this);	
	}
}

Pendulum.Level4.prototype.buildPoints = function(points) {
	// Debugging
	//console.log("Level4.buildPoints");

	pointsTotal = 12+6+6+1+5+6;
	
	var p;

	points180 =  6;
	for(var i=0; i<points180; i++) {
		p = this.add.sprite(-(Math.sin((i*Math.PI)/5))*150, -50+(Math.cos((i*Math.PI)/5))*170, "point");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("p", 20, true);
		p.scale.set(0.15);
		points.add(p);
	}

	pointsV = 5;
	for(var i=0; i<pointsV; i++) {
		p = this.add.sprite(100, -250-i*100, "point");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("p", 20, true);
		p.scale.set(0.15);
		points.add(p);
	}

	p = this.add.sprite(0, -650, "point");
	p.anchor.setTo(0.5, 0.5);
	p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
	p.animations.play("p", 20, true);
	p.scale.set(0.15);
	points.add(p);

	pointsV = 6;
	for(var i=0; i<pointsV; i++) {
		p = this.add.sprite(-100, -650-i*100, "point");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("p", 20, true);
		p.scale.set(0.15);
		points.add(p);
	}

	points180 =  6;
	for(var i=0; i<points180; i++) {
		p = this.add.sprite((Math.sin((i*Math.PI)/5))*150, -1300+(Math.cos((i*Math.PI)/5))*150, "point");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("p", 20, true);
		p.scale.set(0.15);
		points.add(p);
	}
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Level4.prototype.render = function() {}