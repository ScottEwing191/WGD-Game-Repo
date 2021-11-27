
// You can write more code here

/* START OF COMPILED CODE */

class LevelCompletePanel_P extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.visible = false;

		// levelCompleteScreen
		const levelCompleteScreen = scene.add.image(512, 416, "LevelCompleteScreen");
		this.add(levelCompleteScreen);

		// AttemptsPanel_1
		const attemptsPanel_1 = scene.add.container(512, 320);
		this.add(attemptsPanel_1);

		// attemptsBackground_1
		const attemptsBackground_1 = scene.add.image(0, 0, "Buttons_sheet", 7);
		attemptsBackground_1.scaleX = 1.3;
		attemptsBackground_1.scaleY = 0.5;
		attemptsPanel_1.add(attemptsBackground_1);

		// resetsText_1
		const resetsText_1 = scene.add.bitmapText(0, 0, "scott-script-bold", "Resets: 0");
		resetsText_1.setOrigin(0.5, 0.5);
		resetsText_1.text = "Resets: 0";
		resetsText_1.fontSize = 30;
		resetsText_1.dropShadowX = 1;
		resetsText_1.dropShadowY = 1;
		attemptsPanel_1.add(resetsText_1);

		// returnToMenu
		const returnToMenu = scene.add.sprite(512, 608, "Buttons_sheet", 4);
		returnToMenu.scaleX = 1.5;
		returnToMenu.scaleY = 0.5;
		this.add(returnToMenu);

		// returnToMenu_C
		const returnToMenu_C = scene.add.container(512, 608);
		this.add(returnToMenu_C);

		// bitmaptext
		const bitmaptext = scene.add.bitmapText(0, 0, "scott-script-bold-3", "Return To Menu");
		bitmaptext.setOrigin(0.5, 0.5);
		bitmaptext.text = "Return To Menu";
		bitmaptext.fontSize = 25;
		returnToMenu_C.add(bitmaptext);

		// replayButton
		const replayButton = scene.add.sprite(416, 512, "Buttons_sheet", 2);
		this.add(replayButton);

		// replayLevel_C
		const replayLevel_C = scene.add.container(0, 0);
		this.add(replayLevel_C);

		// replayLevelText
		const replayLevelText = scene.add.bitmapText(416, 512, "scott-script-bold-3", "Replay\nLevel");
		replayLevelText.setOrigin(0.5, 0.5);
		replayLevelText.text = "Replay\nLevel";
		replayLevelText.fontSize = 30;
		replayLevel_C.add(replayLevelText);

		// nextLevel
		const nextLevel = scene.add.sprite(608, 512, "Buttons_sheet", 0);
		this.add(nextLevel);

		// nextLevel_C
		const nextLevel_C = scene.add.container(0, 0);
		this.add(nextLevel_C);

		// nextLevelText
		const nextLevelText = scene.add.bitmapText(608, 512, "scott-script-bold-3", "Next\nLevel");
		nextLevelText.setOrigin(0.5, 0.5);
		nextLevelText.text = "Next\nLevel";
		nextLevelText.fontSize = 30;
		nextLevel_C.add(nextLevelText);

		// coinEmptyPlace
		const coinEmptyPlace = scene.add.image(512, 400, "coin empty place");
		coinEmptyPlace.scaleX = 0.25;
		coinEmptyPlace.scaleY = 0.25;
		this.add(coinEmptyPlace);

		// returnToMenu (components)
		const returnToMenuChangeLevelButton = new ChangeLevelButton(returnToMenu);
		returnToMenuChangeLevelButton.changeAnimation = "purple";

		// replayButton (components)
		const replayButtonChangeLevelButton = new ChangeLevelButton(replayButton);
		replayButtonChangeLevelButton.changeAnimation = "pink";
		replayButtonChangeLevelButton.levelName = "Level01";

		// nextLevel (components)
		const nextLevelChangeLevelButton = new ChangeLevelButton(nextLevel);
		nextLevelChangeLevelButton.levelName = "Level02";

		this.resetsText_1 = resetsText_1;
		this.returnToMenu_C = returnToMenu_C;
		this.replayButton = replayButton;
		this.replayLevel_C = replayLevel_C;
		this.nextLevel = nextLevel;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.BitmapText} */
	resetsText_1;
	/** @type {Phaser.GameObjects.Container} */
	returnToMenu_C;
	/** @type {Phaser.GameObjects.Sprite} */
	replayButton;
	/** @type {Phaser.GameObjects.Container} */
	replayLevel_C;
	/** @type {Phaser.GameObjects.Sprite} */
	nextLevel;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
