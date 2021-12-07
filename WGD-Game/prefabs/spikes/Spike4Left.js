
// You can write more code here

/* START OF COMPILED CODE */

class Spike4Left extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// spike4_left
		const spike4_left = scene.add.image(0, 0, "Spikes_Pencill", 15);
		spike4_left.scaleX = 0.25;
		spike4_left.scaleY = 0.25;
		this.add(spike4_left);

		// spike4_left (components)
		const spike4_leftRectanglePhysics = new RectanglePhysics(spike4_left);
		spike4_leftRectanglePhysics.modifyBodyWidth = -44;
		spike4_leftRectanglePhysics.modifyBodyHeight = -16;
		spike4_leftRectanglePhysics.modifyXPosition = 22;
		spike4_leftRectanglePhysics.spriteXOffset = -0.34375;
		new Spike(spike4_left);

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
