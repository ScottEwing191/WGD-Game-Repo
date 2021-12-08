
// You can write more code here

/* START OF COMPILED CODE */

class Coin_P extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Coin_Idle_Sheet", frame ?? 0);

		this.scaleX = 0.2;
		this.scaleY = 0.2;

		// this (components)
		const thisRectanglePhysics = new RectanglePhysics(this);
		thisRectanglePhysics.isSensor = true;
		thisRectanglePhysics.modifyBodyWidth = -10;
		thisRectanglePhysics.modifyBodyHeight = -45;
		thisRectanglePhysics.spriteYOffset = 0.2;
		const thisCoinCollectable = new CoinCollectable(this);
		thisCoinCollectable.moveToX = 736;
		thisCoinCollectable.moveToY = 800;

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
