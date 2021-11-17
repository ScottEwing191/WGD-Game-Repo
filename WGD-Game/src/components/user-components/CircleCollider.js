
// You can write more code here

/* START OF COMPILED CODE */

class CircleCollider extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CircleCollider"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {CircleCollider} */
	static getComponent(gameObject) {
		return gameObject["__CircleCollider"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	start() {
		this.scene.matter.add.gameObject(this.gameObject);
		this.gameObject.setBody({
			x: this.gameObject.x,
			y: this.gameObject.y,
			type: 'circle',
			radius: '32'
		},{
			isStatic: true
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
