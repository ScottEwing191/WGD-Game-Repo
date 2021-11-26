
// You can write more code here

/* START OF COMPILED CODE */

class AttemptsPanel_P extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// attemptsBackground
		const attemptsBackground = scene.add.image(0, 0, "Buttons_sheet", 7);
		attemptsBackground.scaleX = 1.1;
		attemptsBackground.scaleY = 0.5;
		this.add(attemptsBackground);

		// resetsText
		const resetsText = scene.add.bitmapText(0, 0, "scott-script-bold", "Resets: 0");
		resetsText.setOrigin(0.5, 0.5);
		resetsText.text = "Resets: 0";
		resetsText.fontSize = 30;
		resetsText.dropShadowX = 1;
		resetsText.dropShadowY = 1;
		this.add(resetsText);

		this.resetsText = resetsText;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.BitmapText} */
	resetsText;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
