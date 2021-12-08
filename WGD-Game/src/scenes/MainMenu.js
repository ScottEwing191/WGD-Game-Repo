
// You can write more code here

/* START OF COMPILED CODE */

class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mainMenu
		const mainMenu = this.add.tilemap("MainMenu");
		mainMenu.addTilesetImage("Crayon_Tileset", "Crayon_256");
		mainMenu.addTilesetImage("Pencil_Tileset", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// decoration
		const decoration = mainMenu.createLayer("Decoration", ["Pencil_Tileset"], 0, 0);
		decoration.scaleX = 0.25;
		decoration.scaleY = 0.25;

		// background
		const background = mainMenu.createLayer("Background", ["Crayon_Tileset"], 0, 0);
		background.scaleX = 0.25;
		background.scaleY = 0.25;

		// ground_1
		const ground_1 = mainMenu.createLayer("Ground", ["Crayon_Tileset","Pencil_Tileset"], 0, 0);
		ground_1.scaleX = 0.25;
		ground_1.scaleY = 0.25;

		// LevelSelectScreen
		const levelSelectScreen = this.add.container(512, 608);

		// buttons_sheet01
		const buttons_sheet01 = this.add.sprite(0, 0, "Buttons_sheet", 4);
		levelSelectScreen.add(buttons_sheet01);

		// LevelSelectText
		const levelSelectText = this.add.bitmapText(0, 0, "scott-script-bold-3", "Select \nLevel!");
		levelSelectText.setOrigin(0.5, 0.5);
		levelSelectText.text = "Select \nLevel!";
		levelSelectText.fontSize = 25;
		levelSelectText.align = 1;
		levelSelectText.dropShadowAlpha = 0;
		levelSelectScreen.add(levelSelectText);

		// PlayButton
		const playButton = this.add.container(512, 480);

		// buttons_sheet0
		const buttons_sheet0 = this.add.sprite(0, 0, "Buttons_sheet", 0);
		playButton.add(buttons_sheet0);

		// clickToPlayText
		const clickToPlayText = this.add.bitmapText(0, 0, "scott-script-bold-3", "Click to \nPlay!");
		clickToPlayText.setOrigin(0.5, 0.5);
		clickToPlayText.text = "Click to \nPlay!";
		clickToPlayText.fontSize = 25;
		clickToPlayText.align = 1;
		clickToPlayText.dropShadowAlpha = 0;
		playButton.add(clickToPlayText);

		// doodleCourse_Curved
		this.add.image(512, 192, "DoodleCourse Curved");

		// jumpPadUnmovable_1
		const jumpPadUnmovable_1 = new JumpPadUnmovable(this, 704, 448);
		this.add.existing(jumpPadUnmovable_1);

		// jumpPadUnmovable
		const jumpPadUnmovable = new JumpPadUnmovable(this, 315, 444);
		this.add.existing(jumpPadUnmovable);

		// player
		const player = new PlayerPrefab(this, 496, 336);
		this.add.existing(player);

		// lists
		const jumpPads = []
		const movableObjects = []
		const spikes = []

		// buttons_sheet01 (components)
		const buttons_sheet01ChangeLevelButton = new ChangeLevelButton(buttons_sheet01);
		buttons_sheet01ChangeLevelButton.changeAnimation = "purple";
		buttons_sheet01ChangeLevelButton.levelName = "LevelSelect";

		// buttons_sheet0 (components)
		new MenuPlayButton(buttons_sheet0);

		// jumpPadUnmovable_1 (components)
		const jumpPadUnmovable_1JumpPad = JumpPad.getComponent(jumpPadUnmovable_1);
		jumpPadUnmovable_1JumpPad.force = 10.25;
		const jumpPadUnmovable_1RectanglePhysics = RectanglePhysics.getComponent(jumpPadUnmovable_1);
		jumpPadUnmovable_1RectanglePhysics.modifyXPosition = -32;
		jumpPadUnmovable_1RectanglePhysics.angle = -45;

		// jumpPadUnmovable (components)
		const jumpPadUnmovableJumpPad = JumpPad.getComponent(jumpPadUnmovable);
		jumpPadUnmovableJumpPad.force = 10.25;
		const jumpPadUnmovableRectanglePhysics = RectanglePhysics.getComponent(jumpPadUnmovable);
		jumpPadUnmovableRectanglePhysics.modifyXPosition = 32;
		jumpPadUnmovableRectanglePhysics.angle = 45;

		// player (components)
		const playerPlayer = Player.getComponent(player);
		playerPlayer.xVelocity = 13;

		this.player = player;
		this.mainMenu = mainMenu;
		this.jumpPads = jumpPads;
		this.movableObjects = movableObjects;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {PlayerPrefab} */
	player;
	/** @type {Array<any>} */
	jumpPads;
	/** @type {Array<any>} */
	movableObjects;
	/** @type {Array<any>} */
	spikes;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/*nextLevel(){
		this.scene.start("Level01");
	}*/

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
