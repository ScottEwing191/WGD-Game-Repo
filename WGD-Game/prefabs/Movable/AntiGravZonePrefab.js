
// You can write more code here

/* START OF COMPILED CODE */

class AntiGravZonePrefab extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Pencil_256", frame ?? 105);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// this (components)
		const thisRectanglePhysics = new RectanglePhysics(this);
		thisRectanglePhysics.isSensor = true;
		new ControllableObject(this);
		const thisAntiGravZone = new AntiGravZone(this);
		thisAntiGravZone.zoneAirFriction = 0.001;

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
