
// You can write more code here

/* START OF COMPILED CODE */

class Jump_Pad extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Pencil_256", frame ?? 73);

		this.scaleX = 0.25;
		this.scaleY = 0.25;

		// this (components)
		const thisJumpPad = new JumpPad(this);
		thisJumpPad.force = 8;
		const thisRectanglePhysics = new RectanglePhysics(this);
		thisRectanglePhysics.isSensor = true;
		thisRectanglePhysics.modifyBodyWidth = -24;
		thisRectanglePhysics.modifyBodyHeight = -56;
		thisRectanglePhysics.modifyYPosition = 4;
		thisRectanglePhysics.spriteYOffset = 0.4375;
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
