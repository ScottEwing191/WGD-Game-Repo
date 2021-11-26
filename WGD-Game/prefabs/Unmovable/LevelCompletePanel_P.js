
// You can write more code here

/* START OF COMPILED CODE */

class LevelCompletePanel_P extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// levelCompleteScreen
		const levelCompleteScreen = scene.add.image(507, 413, "LevelCompleteScreen");
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

		// returnToMenu_C
		const returnToMenu_C = scene.add.container(512, 608);
		this.add(returnToMenu_C);

		// buttons_sheet4_1
		const buttons_sheet4_1 = scene.add.sprite(0, 0, "Buttons_sheet", 4);
		buttons_sheet4_1.scaleX = 1.5;
		buttons_sheet4_1.scaleY = 0.5;
		returnToMenu_C.add(buttons_sheet4_1);

		// bitmaptext
		const bitmaptext = scene.add.bitmapText(0, 0, "scott-script-bold-3", "Return To Menu");
		bitmaptext.setOrigin(0.5, 0.5);
		bitmaptext.text = "Return To Menu";
		bitmaptext.fontSize = 25;
		returnToMenu_C.add(bitmaptext);

		// replayLevel_C
		const replayLevel_C = scene.add.container(0, 0);
		this.add(replayLevel_C);

		// replayButton
		const replayButton = scene.add.sprite(416, 512, "Buttons_sheet", 2);
		replayLevel_C.add(replayButton);

		// replayLevelText
		const replayLevelText = scene.add.bitmapText(416, 512, "scott-script-bold-3", "Replay\nLevel");
		replayLevelText.setOrigin(0.5, 0.5);
		replayLevelText.text = "Replay\nLevel";
		replayLevelText.fontSize = 30;
		replayLevel_C.add(replayLevelText);

		// nextLevel_C
		const nextLevel_C = scene.add.container(0, 0);
		this.add(nextLevel_C);

		// nextLevel
		const nextLevel = scene.add.sprite(608, 512, "Buttons_sheet", 0);
		nextLevel_C.add(nextLevel);

		// nextLevelText
		const nextLevelText = scene.add.bitmapText(608, 512, "scott-script-bold-3", "Next\nLevel");
		nextLevelText.setOrigin(0.5, 0.5);
		nextLevelText.text = "Next\nLevel";
		nextLevelText.fontSize = 30;
		nextLevel_C.add(nextLevelText);

		// buttons_sheet4_1 (components)
		const buttons_sheet4_1ChangeLevelButton = new ChangeLevelButton(buttons_sheet4_1);
		buttons_sheet4_1ChangeLevelButton.changeAnimation = "purple";

		// replayButton (components)
		const replayButtonChangeLevelButton = new ChangeLevelButton(replayButton);
		replayButtonChangeLevelButton.changeAnimation = "pink";
		replayButtonChangeLevelButton.levelName = "Level01";

		// nextLevel (components)
		const nextLevelChangeLevelButton = new ChangeLevelButton(nextLevel);
		nextLevelChangeLevelButton.levelName = "Level02";

		this.resetsText_1 = resetsText_1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.BitmapText} */
	resetsText_1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
