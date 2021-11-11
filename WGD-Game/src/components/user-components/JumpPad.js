
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
	/** @type {boolean} */
	isMovable = true;

	/* START-USER-CODE */

	start(){
		//--Set Idle Animation
		//this.gameObject.play('jump-pad-idle')
		//--Add Jump Pad into the Jump Pad array in the scene
		this.scene.jumpPads.push(this.gameObject);
		// this.scene.time.delayedCall(1000, this.addPadsToArray, null, this)		// delay 1000ms before calling methods. Originally thought that jumpPads was not..
																					//.. found in scene because start Methods were called out of order but it was just a typo

	}

	/*addPadsToArray(){
		console.log("Jump Pad Added");
		this.scene.jumpPads.push(this.gameObject);
	}*/
	update(){
	}

	collideWithPlayer(){
		//--Set Active Animation
		if(this.isMovable){
			this.gameObject.play('jump-pad-active');
		}else{
			this.gameObject.play('jump-pad-unmovable-active');
		}

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
