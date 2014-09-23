Pendulum.Level1 = function() {
	var speed;
};

Pendulum.Level1.prototype = new Pendulum.Game();

Pendulum.Level1.prototype.buildWorld = function() {

	// Backgorund as tileSprite to have continuously moving background
	//BG = this.add.tileSprite(0, 0, 1024, 600, "gameBG");	
	console.log("Level1.buildWorld");

	this.speed = 5; 
};


Pendulum.Level1.prototype.update = function() {

		BG.tilePosition.y += this.speed;
		obstacles.y += this.speed;

		//this.physics.arcade.collide(pendulum, obstacles, this.test); 
		//this.physics.arcade.collide(this.end, obstacles, this.test(), null, this);  
		this.physics.arcade.collide(end, obstacles, this.die, null, this);

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
	};
