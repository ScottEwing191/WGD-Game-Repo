
// You can write more code here

/* START OF COMPILED CODE */

class LevelSelect extends Phaser.Scene {

	constructor() {
		super("LevelSelect");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// levelSelect
		const levelSelect = this.add.tilemap("LevelSelect");
		levelSelect.addTilesetImage("Crayon_Tileset", "Crayon_256");
		levelSelect.addTilesetImage("Pencil_Tileset", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// solid_1
		const solid_1 = levelSelect.createLayer("Solid", ["Crayon_Tileset"], 0, 0);
		solid_1.scaleX = 0.25;
		solid_1.scaleY = 0.25;

		// selectLevel06
		const selectLevel06 = this.add.container(784, 512);

		// buttons_sheet06
		const buttons_sheet06 = this.add.sprite(0, 160, "Buttons_sheet", 4);
		selectLevel06.add(buttons_sheet06);

		// bitmaptext6
		const bitmaptext6 = this.add.bitmapText(0, 160, "scott-script-bold-3", "Level 06");
		bitmaptext6.setOrigin(0.5, 0.5);
		bitmaptext6.text = "Level 06";
		bitmaptext6.fontSize = 30;
		selectLevel06.add(bitmaptext6);

		// level6
		const level6 = this.add.image(0, 0, "Level6");
		level6.scaleX = 0.35;
		level6.scaleY = 0.35;
		selectLevel06.add(level6);

		// selectLevel05
		const selectLevel05 = this.add.container(512, 512);

		// buttons_sheet05
		const buttons_sheet05 = this.add.sprite(0, 160, "Buttons_sheet", 0);
		selectLevel05.add(buttons_sheet05);

		// bitmaptext5
		const bitmaptext5 = this.add.bitmapText(0, 160, "scott-script-bold-3", "Level 05");
		bitmaptext5.setOrigin(0.5, 0.5);
		bitmaptext5.text = "Level 05";
		bitmaptext5.fontSize = 30;
		selectLevel05.add(bitmaptext5);

		// level5
		const level5 = this.add.image(0, 0, "Level5");
		level5.scaleX = 0.35;
		level5.scaleY = 0.35;
		selectLevel05.add(level5);

		// selectLevel04
		const selectLevel04 = this.add.container(240, 512);

		// buttons_sheet04
		const buttons_sheet04 = this.add.sprite(0, 160, "Buttons_sheet", 2);
		selectLevel04.add(buttons_sheet04);

		// bitmaptext4
		const bitmaptext4 = this.add.bitmapText(0, 160, "scott-script-bold-3", "Level 04");
		bitmaptext4.setOrigin(0.5, 0.5);
		bitmaptext4.text = "Level 04";
		bitmaptext4.fontSize = 30;
		selectLevel04.add(bitmaptext4);

		// level4
		const level4 = this.add.image(0, 0, "Level4");
		level4.scaleX = 0.35;
		level4.scaleY = 0.35;
		selectLevel04.add(level4);

		// selectLevel03
		const selectLevel03 = this.add.container(784, 144);

		// buttons_sheet03
		const buttons_sheet03 = this.add.sprite(0, 160, "Buttons_sheet", 2);
		selectLevel03.add(buttons_sheet03);

		// bitmaptext3
		const bitmaptext3 = this.add.bitmapText(0, 160, "scott-script-bold-3", "Level 03");
		bitmaptext3.setOrigin(0.5, 0.5);
		bitmaptext3.text = "Level 03";
		bitmaptext3.fontSize = 30;
		selectLevel03.add(bitmaptext3);

		// level3
		const level3 = this.add.image(0, 0, "Level3");
		level3.scaleX = 0.35;
		level3.scaleY = 0.35;
		selectLevel03.add(level3);

		// selectLevel02
		const selectLevel02 = this.add.container(512, 144);

		// buttons_sheet02
		const buttons_sheet02 = this.add.sprite(0, 160, "Buttons_sheet", 4);
		selectLevel02.add(buttons_sheet02);

		// bitmaptext2
		const bitmaptext2 = this.add.bitmapText(0, 160, "scott-script-bold-3", "Level 02");
		bitmaptext2.setOrigin(0.5, 0.5);
		bitmaptext2.text = "Level 02";
		bitmaptext2.fontSize = 30;
		selectLevel02.add(bitmaptext2);

		// level2
		const level2 = this.add.image(0, 0, "Level2");
		level2.scaleX = 0.35;
		level2.scaleY = 0.35;
		selectLevel02.add(level2);

		// selectLevel01
		const selectLevel01 = this.add.container(240, 144);

		// buttons_sheet01
		const buttons_sheet01 = this.add.sprite(0, 160, "Buttons_sheet", 0);
		selectLevel01.add(buttons_sheet01);

		// bitmaptext1
		const bitmaptext1 = this.add.bitmapText(0, 160, "scott-script-bold-3", "Level 01");
		bitmaptext1.setOrigin(0.5, 0.5);
		bitmaptext1.text = "Level 01";
		bitmaptext1.fontSize = 30;
		selectLevel01.add(bitmaptext1);

		// level1
		const level1 = this.add.image(0, 0, "Level1");
		level1.scaleX = 0.35;
		level1.scaleY = 0.35;
		selectLevel01.add(level1);

		// back
		const back = this.add.sprite(80, 704, "back");
		back.scaleX = 0.6;
		back.scaleY = 0.6;

		// buttons_sheet06 (components)
		const buttons_sheet06ChangeLevelButton = new ChangeLevelButton(buttons_sheet06);
		buttons_sheet06ChangeLevelButton.levelName = "Level06";

		// buttons_sheet05 (components)
		const buttons_sheet05ChangeLevelButton = new ChangeLevelButton(buttons_sheet05);
		buttons_sheet05ChangeLevelButton.levelName = "Level05";

		// buttons_sheet04 (components)
		const buttons_sheet04ChangeLevelButton = new ChangeLevelButton(buttons_sheet04);
		buttons_sheet04ChangeLevelButton.changeAnimation = "pink";
		buttons_sheet04ChangeLevelButton.levelName = "Level04";

		// buttons_sheet03 (components)
		const buttons_sheet03ChangeLevelButton = new ChangeLevelButton(buttons_sheet03);
		buttons_sheet03ChangeLevelButton.changeAnimation = "pink";
		buttons_sheet03ChangeLevelButton.levelName = "Level03";

		// buttons_sheet02 (components)
		const buttons_sheet02ChangeLevelButton = new ChangeLevelButton(buttons_sheet02);
		buttons_sheet02ChangeLevelButton.changeAnimation = "purple";
		buttons_sheet02ChangeLevelButton.levelName = "Level02";

		// buttons_sheet01 (components)
		const buttons_sheet01ChangeLevelButton = new ChangeLevelButton(buttons_sheet01);
		buttons_sheet01ChangeLevelButton.levelName = "Level01";

		// back (components)
		const backChangeLevelButton = new ChangeLevelButton(back);
		backChangeLevelButton.changeAnimation = "\n";

		this.levelSelect = levelSelect;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	nextLevel(levelName){
		if (levelName == undefined){
			levelName = 'Level06';
		}
		this.scene.start(levelName);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
