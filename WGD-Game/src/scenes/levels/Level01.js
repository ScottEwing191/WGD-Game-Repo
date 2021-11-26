
// You can write more code here
// noinspection DuplicatedCode

/* START OF COMPILED CODE */

class Level01 extends Phaser.Scene {

	constructor() {
		super("Level01");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level01
		const level01 = this.add.tilemap("Level01");
		level01.addTilesetImage("Crayon_Tileset", "Crayon_256");
		level01.addTilesetImage("Pencil_Tileset", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// gameManager
		const gameManager = this.add.rectangle(1088, 64, 128, 128);
		gameManager.isFilled = true;

		// decoration
		const decoration = level01.createLayer("Decoration", ["Pencil_Tileset"], 0, 0);
		decoration.scaleX = 0.25;
		decoration.scaleY = 0.25;

		// solid_1
		const solid_1 = level01.createLayer("Solid", ["Crayon_Tileset"], 0, 0);
		solid_1.scaleX = 0.25;
		solid_1.scaleY = 0.25;

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 832, 256);
		this.add.existing(platformGrassSmall);

		// platformGrassBig
		const platformGrassBig = new PlatformGrassBig(this, 832, 352);
		this.add.existing(platformGrassBig);

		// platformGrassBig_1
		const platformGrassBig_1 = new PlatformGrassBig(this, 640, 448);
		this.add.existing(platformGrassBig_1);

		// player
		const player = new PlayerPrefab(this, 832, 416);
		this.add.existing(player);

		// levelEnd_P
		const levelEnd_P = new LevelEnd_P(this, 832, 576);
		this.add.existing(levelEnd_P);

		// AttemptsPanel
		const attemptsPanel = this.add.container(896, 800);

		// attemptsBackground
		const attemptsBackground = this.add.image(0, 0, "Buttons_sheet", 7);
		attemptsBackground.scaleX = 1.1;
		attemptsBackground.scaleY = 0.5;
		attemptsPanel.add(attemptsBackground);

		// resetsText
		const resetsText = this.add.bitmapText(0, 0, "scott-script-bold", "Resets: 0");
		resetsText.setOrigin(0.5, 0.5);
		resetsText.text = "Resets: 0";
		resetsText.fontSize = 30;
		resetsText.dropShadowX = 1;
		resetsText.dropShadowY = 1;
		attemptsPanel.add(resetsText);

		// levelCompletePanel_P
		const levelCompletePanel_P = new LevelCompletePanel_P(this, 0, 0);
		this.add.existing(levelCompletePanel_P);

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		this.gameManager = gameManager;
		this.solid_1 = solid_1;
		this.player = player;
		this.resetsText = resetsText;
		this.levelCompletePanel_P = levelCompletePanel_P;
		this.level01 = level01;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	solid_1;
	/** @type {PlayerPrefab} */
	player;
	/** @type {Phaser.GameObjects.BitmapText} */
	resetsText;
	/** @type {LevelCompletePanel_P} */
	levelCompletePanel_P;
	/** @type {Array<any>} */
	movableObjects;
	/** @type {Array<any>} */
	jumpPads;
	/** @type {Array<any>} */
	spikes;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		//--Add collision to the Tile Layer
		this.level01.setCollisionByProperty({collider :true});
		this.matter.world.convertTilemapLayer(this.solid_1);
	}


	nextLevel(levelName){
		if (levelName == undefined){
			levelName = 'Level02';
		}
		this.scene.start(levelName);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
