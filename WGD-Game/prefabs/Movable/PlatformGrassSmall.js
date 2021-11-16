
// You can write more code here

/* START OF COMPILED CODE */

class PlatformGrassSmall extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "platform_pencil_grass_2", frame);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// this (components)
		const thisRectanglePhysics = new RectanglePhysics(this);
		thisRectanglePhysics.modifyYPosition = 16;
		new ControllableObject(this);

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
