Pendulum.Level1 = function(game) {};

Pendulum.Level1.prototype = new Pendulum.Game();

Pendulum.Level1.prototype.buildWorld = function() {

	// Backgorund as tileSprite to have continuously moving background
	BG = this.add.tileSprite(0, 0, 1024, 600, "gameBG");	
};