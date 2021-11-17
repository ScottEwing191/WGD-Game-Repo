
// You can write more code here

/* START OF COMPILED CODE */

class PlayerPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "BallPop_256", frame ?? 0);

		this.scaleX = 0.3;
		this.scaleY = 0.3;

		// this (components)
		const thisCirclePhysics = new CirclePhysics(this);
		thisCirclePhysics.radius = 24;
		thisCirclePhysics.bounce = 1;
		new Player(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
