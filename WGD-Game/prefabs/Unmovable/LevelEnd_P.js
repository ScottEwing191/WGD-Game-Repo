
// You can write more code here

/* START OF COMPILED CODE */

class LevelEnd_P extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "LevelEnd_sheet", frame ?? 0);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// this (components)
		const thisCircleCollider = new CircleCollider(this);
		thisCircleCollider.isSensor = true;
		new LevelEnd(this);

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
