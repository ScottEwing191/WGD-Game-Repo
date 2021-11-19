
// You can write more code here

/* START OF COMPILED CODE */

class Spike1Left extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Spikes_Crayon", frame ?? 3);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// this (components)
		const thisRectanglePhysics = new RectanglePhysics(this);
		thisRectanglePhysics.modifyBodyWidth = -44;
		thisRectanglePhysics.modifyBodyHeight = -16;
		thisRectanglePhysics.modifyXPosition = 22;
		thisRectanglePhysics.spriteXOffset = -0.34375;
		new Spike(this);

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
