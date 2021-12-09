
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

		// level01_1
		const level01_1 = this.add.tilemap("Level01");
		level01_1.addTilesetImage("Crayon_Tileset", "Crayon_256");
		level01_1.addTilesetImage("Pencil_Tileset", "Pencil_256");

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
		const platformGrassSmall = new PlatformGrassSmall(this, 736, 160);
		this.add.existing(platformGrassSmall);

		// platformGrassBig
		const platformGrassBig = new PlatformGrassBig(this, 736, 256);
		this.add.existing(platformGrassBig);

		// platformGrassBig_1
		const platformGrassBig_1 = new PlatformGrassBig(this, 736, 352);
		this.add.existing(platformGrassBig_1);

		// player
		const player = new PlayerPrefab(this, 160, 128);
		this.add.existing(player);

		// levelEnd_P
		const levelEnd_P = new LevelEnd_P(this, 832, 576);
		this.add.existing(levelEnd_P);

		// border_1
		const border_1 = level01_1.createLayer("Border", ["Crayon_Tileset"], 0, 0);
		border_1.scaleX = 0.25;
		border_1.scaleY = 0.25;

		// text_Layer
		const text_Layer = this.add.layer();

		// click
		const click = this.add.bitmapText(512, 96, "scott-script-bold-3", "Click objects to select them.");
		click.text = "Click objects to select them.";
		click.fontSize = 30;
		text_Layer.add(click);

		// playText
		const playText = this.add.bitmapText(32, 64, "scott-script-bold-3", "Hit space to play.");
		playText.text = "Hit space to play.";
		playText.fontSize = 30;
		text_Layer.add(playText);

		// resetText
		const resetText = this.add.bitmapText(96, 736, "scott-script-bold-3", "Hit R to reset.");
		resetText.text = "Hit R to reset.";
		resetText.fontSize = 30;
		text_Layer.add(resetText);

		// endText
		const endText = this.add.bitmapText(736, 480, "scott-script-bold-3", "Get ball here.");
		endText.text = "Get ball here.";
		endText.fontSize = 30;
		text_Layer.add(endText);

		// moveText
		const moveText = this.add.bitmapText(608, 192, "scott-script-bold-3", "Move with WASD...");
		moveText.text = "Move with WASD...";
		moveText.fontSize = 30;
		text_Layer.add(moveText);

		// dragText
		const dragText = this.add.bitmapText(512, 288, "scott-script-bold-3", "...or click and drag with mouse.");
		dragText.text = "...or click and drag with mouse.";
		dragText.fontSize = 30;
		text_Layer.add(dragText);

		// rotateText
		const rotateText = this.add.bitmapText(191, 394, "scott-script-bold-3", "Hit Q or E to rotate.");
		rotateText.angle = 30;
		rotateText.text = "Hit Q or E to rotate.";
		rotateText.fontSize = 30;
		text_Layer.add(rotateText);

		// levelCompletePanel_P
		const levelCompletePanel_P = new LevelCompletePanel_P(this, 0, 0);
		this.add.existing(levelCompletePanel_P);

		// attemptsPanel_P
		const attemptsPanel_P = new AttemptsPanel_P(this, 896, 800);
		this.add.existing(attemptsPanel_P);

		// coinEmpty
		const coinEmpty = this.add.image(736, 800, "coin empty place");
		coinEmpty.scaleX = 0.2;
		coinEmpty.scaleY = 0.2;

		// coin_P
		const coin_P = new Coin_P(this, 352, 352);
		this.add.existing(coin_P);

		// btn_icon_home_1
		const btn_icon_home_1 = this.add.sprite(32, 32, "btn_icon_home_1");

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// btn_icon_home_1 (components)
		const btn_icon_home_1ChangeLevelButton = new ChangeLevelButton(btn_icon_home_1);
		btn_icon_home_1ChangeLevelButton.changeAnimation = "\n";

		this.gameManager = gameManager;
		this.solid_1 = solid_1;
		this.player = player;
		this.levelCompletePanel_P = levelCompletePanel_P;
		this.attemptsPanel_P = attemptsPanel_P;
		this.coin_P = coin_P;
		this.level01 = level01;
		this.level01_1 = level01_1;
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
	/** @type {LevelCompletePanel_P} */
	levelCompletePanel_P;
	/** @type {AttemptsPanel_P} */
	attemptsPanel_P;
	/** @type {Coin_P} */
	coin_P;
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
		this.sound.play("book_Page_Turn");					// play paper sound on scene start
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
