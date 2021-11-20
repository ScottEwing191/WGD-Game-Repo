
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
	/** @type {number} */
	radius = 32;
	/** @type {number} */
	bounce = 0.5;
	/** @type {boolean} */
	isStatic = true;
	/** @type {boolean} */
	isSensor = false;

	/* START-USER-CODE */

	/*start() {
		this.scene.matter.add.gameObject(this.gameObject);
		this.gameObject.setBody({
			x: this.gameObject.x,
			y: this.gameObject.y,
			type: 'circle',
			radius: '32'
		},{
			isStatic: true
		})
	}*/

	start() {
		this.scene.matter.add.gameObject(this.gameObject);
		this.gameObject.setBody({
			x: this.gameObject.x,
			y: this.gameObject.y,
			type: 'circle',
			radius: this.radius
		}, {
			isStatic: this.isStatic,
			isSensor : this.isSensor,
			//mass: 25,
			//inverseMass: (1 / 25)
		});
		this.gameObject.setBounce(this.bounce, this.bounce);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
