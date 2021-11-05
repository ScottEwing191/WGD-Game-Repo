
// You can write more code here

/* START OF COMPILED CODE */

class JumpPad extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__JumpPad"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {JumpPad} */
	static getComponent(gameObject) {
		return gameObject["__JumpPad"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	start(){
		//this.gameObject.play('jump-pad-idle')
		//this.gameObject.body.setOnCollideWith(this.scene.player, this.collideWithPlayer())
		//console.log(this.scene.movableObjects);

	}

	update(){
		//this.gameObject.body.setBoundsRectangle()
	}

	collideWithPlayer(){
		console.log('Collision with player');
		this.gameObject.play('jump-pad-active');
		//this.gameObject.pl
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
