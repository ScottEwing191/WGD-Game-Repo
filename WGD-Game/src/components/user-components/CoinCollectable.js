
// You can write more code here

/* START OF COMPILED CODE */

class CoinCollectable extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CoinCollectable"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {CoinCollectable} */
	static getComponent(gameObject) {
		return gameObject["__CoinCollectable"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	start(){
		this.startPosition = this.gameObject.getCenter();
		this.collected = false;
		this.gameObject.play('coin-idle');
		this.gameObject.body.setOnCollideWith(this.scene.player.body, () => {
			this.collideWithPlayer()
		} );
	}

	collideWithPlayer(){
		if (this.collected){
			return;
		}
		console.log('coin');
		this.collected = true;
		this.gameObject.play('coin-pickup');

		//--Play animation
		//--Play sound
		//--Change UI
	}

	playModeEntered(){

	}
	editModeEntered(){
		//--Reset Coin if it has been collected
		if (this.collected){
			this.gameObject.setX(this.startPosition.x);
			this.gameObject.setY(this.startPosition.y);
			this.gameObject.play('coin-idle');
			this.collected = false;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
