
// You can write more code here

/* START OF COMPILED CODE */

class Player extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Player"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Player} */
	static getComponent(gameObject) {
		return gameObject["__Player"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {number} */
	xVelocity = 0;
	/** @type {number} */
	yVelocity = 0;

	/* START-USER-CODE */



	start(){
		this.startPosition = this.gameObject.getCenter();
		this.editModeEntered();
		this.gameObject.on(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'ball-pop', () =>{
			this.playerDeathAnimComplete();
		});
	}

update(){
}
	playModeEntered(){
		this.gameObject.setStatic(false);
		//this.gameObject.body.setVelocity(this.xVelocity, this.yVelocity);
		this.gameObject.setVelocity(this.xVelocity, -this.yVelocity);
	}

	editModeEntered(){
		if (this.gameObject.body.isStatic === false){
			this.gameObject.setStatic(true);
		}
		this.gameObject.x = this.startPosition.x;
		this.gameObject.y = this.startPosition.y;
	}

	playerDeath(){
		this.gameObject.setStatic(true);
		this.gameObject.play('ball-pop');
		this.gameObject.setStatic(false);
	}
	playerDeathAnimComplete(){
		GameManager.getComponent(this.scene.gameManager).levelFailed();
		this.gameObject.play('ball-reform');
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
