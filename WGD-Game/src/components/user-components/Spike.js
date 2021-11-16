
// You can write more code here

/* START OF COMPILED CODE */

class Spike extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Spike"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Spike} */
	static getComponent(gameObject) {
		return gameObject["__Spike"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	start(){
		this.scene.spikes.push(this.gameObject);
		console.log(this.scene.spikes.length);
	}

	playModeEntered(){
		this.gameObject.body.setOnCollideWith(this.scene.player.body, () =>{
			//--Kill the player
			Player.getComponent(this.scene.player).playerDeath();
			//--Tell Game Manager Level Was Failed
			//GameManager.getComponent(this.scene.gameManager).levelFailed();
		} );

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
