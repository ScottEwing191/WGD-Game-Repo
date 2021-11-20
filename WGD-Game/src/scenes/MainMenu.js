
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

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 315, 444);
		this.add.existing(jump_Pad);

		// jump_Pad_1
		const jump_Pad_1 = new Jump_Pad(this, 704, 448);
		this.add.existing(jump_Pad_1);

		// player
		const player = new PlayerPrefab(this, 288, 384);
		this.add.existing(player);

		// gameManager
		const gameManager = this.add.rectangle(1088, 64, 128, 128);
		gameManager.isFilled = true;

		// doodleCourse_Curved
		this.add.image(512, 192, "DoodleCourse Curved");

		// container_1
		const container_1 = this.add.container(512, 576);

		// buttons_sheet0
		const buttons_sheet0 = this.add.image(0, 0, "Buttons_sheet", 0);
		container_1.add(buttons_sheet0);

		// clickToPlayText
		const clickToPlayText = this.add.bitmapText(0, 0, "scott-script-bold-3", "Click to \nPlay!");
		clickToPlayText.setOrigin(0.5, 0.5);
		clickToPlayText.text = "Click to \nPlay!";
		clickToPlayText.fontSize = 25;
		clickToPlayText.align = 1;
		clickToPlayText.dropShadowAlpha = 0;
		container_1.add(clickToPlayText);

		// lists
		const jumpPads = []
		const movableObjects = []
		const spikes = []

		// jump_Pad (components)
		const jump_PadJumpPad = JumpPad.getComponent(jump_Pad);
		jump_PadJumpPad.force = 10;
		const jump_PadRectanglePhysics = RectanglePhysics.getComponent(jump_Pad);
		jump_PadRectanglePhysics.modifyXPosition = 32;
		jump_PadRectanglePhysics.angle = 45;

		// jump_Pad_1 (components)
		const jump_Pad_1JumpPad = JumpPad.getComponent(jump_Pad_1);
		jump_Pad_1JumpPad.force = 10;
		const jump_Pad_1RectanglePhysics = RectanglePhysics.getComponent(jump_Pad_1);
		jump_Pad_1RectanglePhysics.modifyXPosition = -32;
		jump_Pad_1RectanglePhysics.angle = -45;

		// gameManager (components)
		new GameManager(gameManager);

		this.player = player;
		this.gameManager = gameManager;
		this.mainMenu = mainMenu;
		this.jumpPads = jumpPads;
		this.movableObjects = movableObjects;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {PlayerPrefab} */
	player;
	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
