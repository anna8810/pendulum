/* ************************************************
** I am really not happy with this code at all.	 **
** It is ugly and doesnt even work all the time. **
** But I guess you get the concept...            **
**												 **
** Just found a bug -> restart not working.      **
** But since its 23:50 i wont fix it.            **
** I need my beauty sleep ;)                     **
************************************************ */

Pendulum.Eternity = function(game) {}

Pendulum.Eternity.prototype = Object.create(Pendulum.Game.prototype);
//Pendulum.Level3.prototype.constructor = Pendulum.Level3;

Pendulum.Eternity.prototype.buildLevel = function() {
	// Debugging
	//console.log("Eternity.buildLevel");

	level = null;
	this.speed = 4; 

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "EternityBG");	
}

Pendulum.Eternity.prototype.returnTotalPoints = function() {
	return pointsTotal;
}

Pendulum.Eternity.prototype.randomObstacle = function(rand, y) {

	switch(rand) {
		case 1: // Circle
			//console.log("case1");
			obs = obstacles.create(0, y, "circle");
			obs.anchor.setTo(0.5, 0.5);
			break;
		
		case 2: // Square Left
			//console.log("case2");
			obs = obstacles.create(-250, y, "square");
			break;

		case 3: // Square Right
			//console.log("case3");
			obs = obstacles.create(0, y, "square");
			break;

		case 4: // Bar middle
			//console.log("case4");
			obs = obstacles.create(0, y, "Hrectangle");
			obs.scale.set(0.8);
			obs.anchor.setTo(0.5, 0.5);
			break;

		case 5: 
			//console.log("case5");
			obs = obstacles.create(0, y, "Vrectangle")
			obs.anchor.setTo(0.5, 0.5);
			break;

		case 6: // CircleS Left
			//console.log("case6");
			obs = obstacles.create(-50, y, "circleS");
			obs.anchor.setTo(0.5, 0.5);
			break;

		case 7: // CircleS Left
			//console.log("case7");
			obs = obstacles.create(50, y, "circleS");
			obs.anchor.setTo(0.5, 0.5);
			break;

		case 8: // Square Left
			//console.log("case8");
			obs = obstacles.create(-500, y, "HrectangleL");
			break;

		case 9: // Square Right
			//console.log("case9");
			obs = obstacles.create(0, y, "HrectangleL");
			break;

		case 10: // CircleS Left
			//console.log("case10");
			obs = obstacles.create(-50, y, "circle");
			obs.scale.set(1.3);
			obs.anchor.setTo(0.5, 0.5);
			break;

		case 11: // CircleS Left
			//console.log("case11");
			obs = obstacles.create(50, y, "circle");
			obs.scale.set(1.3);
			obs.anchor.setTo(0.5, 0.5);
			break;
	}

	obs.checkWorldBounds = true;
	obs.events.onOutOfBounds.add(this.obstaclePassed, this);
}

Pendulum.Eternity.prototype.buildObstacles = function(obstacles) {
	// Debugging
	//console.log("Eternity.buildObstacles");

	var y;
	for(var i=0; i<20; i++) {
		y = -this.world.height*i-200;
		x = Math.floor(Math.random() * 11) + 1;
		
		this.randomObstacle(x, y);
	}
}

i=0;
Pendulum.Eternity.prototype.obstaclePassed = function(obstacle) {
	// Debugging
	//console.log("Eternity.obstaclePassed");

	i++;
	y =- this.world.height*i-300;

	obstacle.reset(obstacle.x, y);	
}

Pendulum.Eternity.prototype.buildPoints = function(points) {
	// Debugging
	//console.log("Eternity.buildPoints");

	pointsTotal = "";
	infinity = this.add.image(this.world.width - 60, 15, "infinity");
	infinity.scale.set(0.7);

	pointsTotal = 20;
	for(var i=0; i<pointsTotal; i++) {
		x = Math.floor(Math.random() * 150) + 1;
		x = x*(Math.random() < 0.5 ? -1 : 1);
		y = - 30*i;

		p = this.add.sprite(x, y, "point");
		p.anchor.setTo(0.5, 0.5);
		p.animations.add("p", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 50, true);
		p.animations.play("p", 20, true);
		p.scale.set(0.15);
		p.checkWorldBounds = true;
		p.events.onOutOfBounds.add(this.pointPassed, this);
		points.add(p);
	}
}

Pendulum.Eternity.prototype.pointPassed = function(point) {
	// Debugging
	//console.log("Eternity.pointPassed");
	
	y = point.y - this.world.height;

	point.kill();
	point.reset(point.x, y);
}


Pendulum.Eternity.prototype.getPoint = function(head, point) {
	nrOfPoints++;
	
	// Debugging
	//console.log("Eternity.getPoint");

	y = point.y - this.world.height;

	point.kill();
	point.reset(point.x, y);
	
	score.setText("Score: " + nrOfPoints);

	if(nrOfPoints%10 == 0) {
		this.speed++;
	}
}

Pendulum.Eternity.prototype.die = function() {
	// Debugging
	//console.log("Eternity.die");
	
	// Go to Game Over state
	this.state.start("EternityOver", true, false, nrOfPoints);
}

// Phaser needs this reaaly bad. Dont know why. Stupid Phaser...
Pendulum.Eternity.prototype.render = function() {}