
// You can write more code here

/* START OF COMPILED CODE */

class LevelEnd extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__LevelEnd"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {LevelEnd} */
	static getComponent(gameObject) {
		return gameObject["__LevelEnd"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	start(){
		this.gameObject.play('level-end');
		this.gameObject.body.setOnCollideWith(this.scene.player.body, () =>{
			GameManager.getComponent(this.scene.gameManager).levelWon();
			Player.getComponent(this.scene.player).levelWon(this.gameObject.x, this.gameObject.y);
		} );

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
