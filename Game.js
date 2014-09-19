Pendulum.Game = function(game) {};

Pendulum.Game.prototype = {

	create: function() {

		this.speed = 1; 
		this.buildWorld();
		this.buildPath();
		this.buildPendulum();
	},

	buildWorld: function() {

		//this.add.image(0,0, "gameBG");

		// Backgorund as tileSprite to have continuously moving background
		BG = this.add.tileSprite(0, 0, 1024, 600, "gameBG");

		
	},

	buildPath: function() {
		// Add graohics to the game
		graphics = this.add.graphics(0, 0);

		// Create stright path
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
		pendulum.create(this.world.width/2-8, this.world.height/2+100, "end");

		//  Enable physics on the player
		this.physics.arcade.enable(pendulum);
		
		//  Our controls
		cursors = this.input.keyboard.createCursorKeys();

	},

	update: function() {

		BG.tilePosition.y += this.speed;

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

	}

}