Pendulum.Game = function() {
	var speed;
	var pendulum;
	var obstacles;
	var o;
	var buttonLeft;
	var buttonRight;
	var movingLeft = false;
	var movingRight = false;
	var level;
};

Pendulum.Game.prototype = {

	create: function() {

		this.buildWorld();
		this.buildPath();
		this.buildPendulum();
		this.buildObstacleGroup();
		this.buildPointGroup();
	},

	buildWorld: function() {
		// Debugging
		//console.log("Game.buildWorld");

		// Run child function to build level
		this.buildLevel();

		//  Controls
		cursors = this.input.keyboard.createCursorKeys();
		this.input.onDown.add(this.activeInput, this);
		this.input.onUp.add(this.releaseInput, this);
		// Left side button
		leftSide = this.add.sprite(0, 0, 'left');
		leftSide.alpha = 0;
		leftSide.inputEnabled = true;
		leftSide.input.pointerOver.id = 1;
		// Right side button
		rightSide = this.add.sprite(this.world.width - 400, 0, 'right');
		rightSide.alpha = 0;
		rightSide.inputEnabled = true;
		rightSide.input.pointerOver.id = 1;	
	},

	activeInput: function() {
		this.inputActive = true;
	},

	releaseInput: function() {
		this.inputActive = false;
	},

	buildPath: function() {
		// Add graphics to the game
		graphics = this.add.graphics(0, 0);

		// Create straight path
		graphics.lineStyle(10, 0x808080, 0.5);
		graphics.moveTo(this.world.width/2,0);
		graphics.lineTo(this.world.width/2, 600);
	},

	buildPendulum: function() {
		// Create pendulum as a group to easier rotate
		pendulum = this.add.group();
		pendulum.x = this.world.width/2;
		pendulum.y = this.world.height/2;

		// Point the pendulum group should rotate around
		pendulum.pivot.x = this.world.width/2;
		pendulum.pivot.y = this.world.height/2-140;

		// Add tail pendulum
		tail = pendulum.create(this.world.width/2, this.world.height/2-140, "tail");
		tail.anchor.setTo(0.5, 0);
		// Add head as sprite for animation
		head = this.add.sprite(this.world.width/2, this.world.height/2, "head");
		head.anchor.setTo(0.5, 0.5);
		head.animations.add("head", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 25, true);
		head.animations.play("head", 25, true);
		head.smoothed = true;
		pendulum.add(head);

		// Enable physics for collsion to work
		this.physics.enable(head, Phaser.Physics.ARCADE);	
	},

	buildObstacleGroup: function() {
		// Create obstacle group
		obstacles = this.add.group();
		obstacles.enableBody = true;
		obstacles.x = this.world.width/2;

		// Create obstacles in child function
		this.buildObstacles(obstacles);
	},

	buildPointGroup: function() {	
		// Create star group
		points = this.add.group();
		//points.enableBody = true;
		points.x = this.world.width/2;

		// Create obstacles in child function
		this.buildPoints(points);

	},

/* ***** TO DO 
/* ***** Create points to pick up along the way. 
/* ***** More points make ha better score
/* ***** Needed if endless mode is ever built
/* *****
	buildOrbGroup: function() {

		orbs = this.add.group();

		for(var i=0; i<10; i++) {

		}
	
	},

	buildSpaceRocks: function() {
    this.spacerockgroup = this.add.group();
    for(var i=0; i<this.totalSpacerocks; i++) {
        var r = this.spacerockgroup.create(this.rnd.integerInRange(0, this.world.width), this.rnd.realInRange(-1500, 0), 'spacerock', 'SpaceRock0000');
        var scale = this.rnd.realInRange(0.3, 1.0);
        r.scale.x = scale;
        r.scale.y = scale;
        this.physics.enable(r, Phaser.Physics.ARCADE);
        r.enableBody = true;
        r.body.velocity.y = this.rnd.integerInRange(200, 400);
        r.animations.add('Fall');
        r.animations.play('Fall', 24, true);
    }

},
*/

	// Called when pendulum hits obstacle
	die: function() {
		// Debugging
		//console.log("HIT");

		// Go to Game Over state
		this.state.start("GameOver",true, false, level);
	},

	// Called when obstacle is passed
	obstaclePassed: function() {
		obstaclePassed++;
		// Debugging
		//console.log("obstaclePassed: " + obstaclePassed);

		// Uglyhack
		if(obstaclePassed == obstaclesTotal)
		{
			// Debugging
			//console.log("WINNING");

			// Go to Game Won state
			this.state.start("GameWon",true, false, level);
		}
	},

	update: function() {
		// Move background and obstacles
		BG.tilePosition.y += this.speed;
		obstacles.y += this.speed;
		points.y += this.speed;

		// Checks collison using overlap since the objects doesnt need to be seperated
		this.physics.arcade.overlap(head, obstacles, this.die, null, this);

		// Moving the end of the pendulum (player)
		// First if statement for arrowkey
		// Sedond if statement for touch on mobile device
		if (cursors.left.isDown || this.input.pointer1.isDown && this.input.x < this.world.width/2 ){//|| leftSide.input.pointerOver() && (this.inputActive)) {
			// Debugging
			//console.log("LEFT");

			// Rotate pendlum clockwise
			pendulum.rotation += 0.05;
		}
		else if (cursors.right.isDown || this.input.pointer1.isDown && this.input.x > this.world.width/2 ){//|| rightSide.input.pointerOver() && (this.inputActive)) {
			// Debugging
			//console.log("RIGHT");

			// Rotate pendulum counter clockwise
			pendulum.rotation -= 0.05;
		}
		else {}
	}
}