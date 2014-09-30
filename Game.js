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
	},

	buildWorld: function() {
		// Debugging
		//console.log("Game.buildWorld");

		// Run child function to set background and speed
		this.buildLevel();

		//  Our controls
		cursors = this.input.keyboard.createCursorKeys();

		buttonLeft = this.add.sprite(0, this.world.height - 96, 'left');
		buttonLeft.inputEnabled = true;
		buttonLeft.input.pointerOver.id = 1;

		buttonRight = this.add.sprite(this.world.width - 96, this.world.height - 96, 'right');
		buttonRight.inputEnabled = true;
		buttonRight.input.pointerOver.id = 1;

		this.input.onDown.add(this.activeInput, this);
		this.input.onUp.add(this.releaseInput, this);
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

		// Put pednulum group in the middle of the screen
		pendulum.x = this.world.width/2;
		pendulum.y = this.world.height/2;

		// What point the pendulum group should rotate around
		pendulum.pivot.x = this.world.width/2;
		pendulum.pivot.y = this.world.height/2;

		// Add center and end to pendulum
		center = pendulum.create(this.world.width/2, this.world.height/2, "center");
		center.anchor.setTo(0.5, 0.5);
		end = pendulum.create(this.world.width/2, this.world.height/2+100, "end");
		end.anchor.setTo(0.5, 0.5);
		// Enable physics for collsion to work
		this.physics.enable(end, Phaser.Physics.ARCADE);	
	},

	buildObstacleGroup: function() {

		// Create obstacle group
		obstacles = this.add.group();
		obstacles.enableBody = true;
		obstacles.x = this.world.width/2;

		// Create obstacles in each level
		this.buildObstacles(obstacles);
	},

/*
	buildOrbGroup: function() {
	
	}
*/

	update: function() {

		BG.tilePosition.y += this.speed;
		obstacles.y += this.speed;

		// Checks collison using overlap since the objects doesnt need to be seperated
		this.physics.arcade.overlap(end, obstacles, this.die, null, this);

		// Moving the end of the pendulum (player)
		if (cursors.left.isDown || buttonLeft.input.pointerOver() && (this.inputActive)) {

			// Rotate pendlum clockwise
			pendulum.rotation += 0.05;
		}
		else if (cursors.right.isDown || buttonRight.input.pointerOver() && (this.inputActive)) {

			// Rotate pendulum counter clockwise
			pendulum.rotation -= 0.05;
		}
		else {

			// Stand still
			//player.animations.stop();

		}
	}, 

	// Called when pendulum hits obstacle
	die: function() {
		// Debugging
		//console.log("HIT");
		customParam1 = 1;
		customParam2 = 2;
		// Go to Game Over state
		this.state.start("GameOver",true, false, level);
	},

	// Called when all obstacles are passed
	obstaclePassed: function() {
		obstaclePassed++;

		// Uglyhack
		if(obstaclePassed == obstaclesTotal)
		{
			// Debugging
			//console.log("WINNING");

			// Go to Game Won state
			this.state.start("GameWon",true, false, level);
		}
	}
}