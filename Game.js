Pendulum.Game = function() {
	var speed;
	var pendulum;
	var obstacles;
};

Pendulum.Game.prototype = {

	create: function() {

		this.buildWorld();
		this.buildPath();
		this.buildPendulum();
		this.buildObstacles();
	},

	buildWorld: function() {
		// Debugging
		console.log("Game.buildWorld");

		// Backgorund as tileSprite to have continuously moving background
		BG = this.add.tileSprite(0, 0, 1024, 600, "gameBG");	

		// Sets speed of game
		this.speed = 2; 
	},

	buildPath: function() {
		// Add graphics to the game
		graphics = this.add.graphics(0, 0);

		// Create straight path
		graphics.lineStyle(11, 0x808080, 0.5);
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
		pendulum.create(this.world.width/2-8, this.world.height/2, "center");
		end = pendulum.create(this.world.width/2-8, this.world.height/2+100, "end");
		// Enable physics for collsion to work
		this.physics.enable(end, Phaser.Physics.ARCADE);

		//  Enable physics on the player
		//this.physics.arcade.enable(pendulum);
		
		//  Our controls
		cursors = this.input.keyboard.createCursorKeys();	
	},

	buildObstacles: function() {
		obstaclesTotal = 5;

		// Create obstacle group
		obstacles = this.add.group();
		obstacles.checkWorldBounds = true;

		// Add physics for collision
		obstacles.enableBody = true;
		obstacles.physicsBodyType = Phaser.Physics.ARCADE;

		obstacles.x = this.world.width/2;

		left = true; 

		var o;

		for(var i=0; i<obstaclesTotal; ++i) {
			// DEBUGGING
			//console.log(i);
			//console.log(i)

			if(left) {
				obstacles.create(-231, -200*i, "rectangle");
				left = false;
			}
			else {
				obstacles.create(0, -200*i, "rectangle");
				left = true;
			}
		};
	},

	update: function() {

		BG.tilePosition.y += this.speed;
		obstacles.y += this.speed;

		// Checks collison using overlap since the objects doesnt need to be seperated
		this.physics.arcade.overlap(end, obstacles, this.die, null, this);

		// Moving the end of the pendulum (player)
		if (cursors.left.isDown) {

			// Rotate pendlum clockwise
			pendulum.rotation += 0.05;
		}
		else if (cursors.right.isDown) {

			// Rotate pendulum counter clockwise
			pendulum.rotation -= 0.05;
		}
		else {

			// Stand still
			//player.animations.stop();

		}
	}, 

	die: function() {
		console.log("HIT");
		this.state.start("GameOver");
	}
}