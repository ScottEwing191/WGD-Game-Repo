
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
	/** @type {number} */
	moveToX = 0;
	/** @type {number} */
	moveToY = 0;

	/* START-USER-CODE */

	start(){
		this.startPosition = this.gameObject.getCenter();
		this.collected = false;
		this.gameObject.play('coin-idle');
		this.gameObject.body.setOnCollideWith(this.scene.player.body, () => {
			this.collideWithPlayer()
		} );

		this.gameObject.on(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'coin-pickup', () =>{
			this.respawnAtMoveToLocation();
		});
		this.gameObject.on(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'coin-respawn', () =>{
			this.switchToIdle();
		});
	}

	collideWithPlayer(){
		if (this.collected){
			return;
		}
		this.collected = true;
		this.gameObject.play('coin-pickup');		//--Play animation
		this.scene.sound.play("Coin_pickup");		//--Play sound
	}

	respawnAtMoveToLocation(){
		this.gameObject.setX(this.moveToX);
		this.gameObject.setY(this.moveToY);
		this.gameObject.play('coin-respawn-and-stay');
	}

	switchToIdle(){
		this.gameObject.play('coin-idle');
	}

	editModeEntered(){
		//--Reset Coin if it has been collected
		if (this.collected){
			this.gameObject.setX(this.startPosition.x);
			this.gameObject.setY(this.startPosition.y);
			this.gameObject.play('coin-respawn');
			this.collected = false;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
