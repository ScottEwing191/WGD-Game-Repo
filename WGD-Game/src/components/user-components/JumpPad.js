
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
	/** @type {number} */
	force = 5;

	/* START-USER-CODE */

	start(){
		this.gameObject.play('jump-pad-idle')
		//this.gameObject.body.setOnCollideWith(this.scene.player, this.collideWithPlayer())
		//console.log(this.scene.movableObjects);

	}

	update(){
	}

	collideWithPlayer(){
		this.gameObject.play('jump-pad-active');
		this.scene.player.setVelocity(0,0);
		let velocity = new Phaser.Math.Vector2(0,-this.force);
		let rotatedVelocity = this.scene.matter.vector.rotate(velocity,this.gameObject.rotation)
		this.scene.player.setVelocity(rotatedVelocity.x,rotatedVelocity.y);
	}

	playModeEntered(){
		this.gameObject.body.setOnCollideWith(this.scene.player.body, () => {
			this.collideWithPlayer()
		} );
	}

	editModeEntered(){



	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
