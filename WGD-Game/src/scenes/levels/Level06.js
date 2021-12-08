
// You can write more code here

/* START OF COMPILED CODE */

class Level06 extends Phaser.Scene {

	constructor() {
		super("Level06");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level06
		const level06 = this.add.tilemap("Level06");
		level06.addTilesetImage("Crayon_Tileset", "Crayon_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// ground_1
		const ground_1 = level06.createLayer("Ground", ["Crayon_Tileset"], 0, 0);
		ground_1.scaleX = 0.25;
		ground_1.scaleY = 0.25;

		// gameManager
		const gameManager = this.add.rectangle(1114, 165, 128, 128);
		gameManager.isFilled = true;

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		this.ground_1 = ground_1;
		this.level06 = level06;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	ground_1;
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
		this.level06.setCollisionByProperty({collider :true});
		this.matter.world.convertTilemapLayer(this.ground_1);
	}

	nextLevel(levelName){
		if (levelName == undefined){
			levelName = 'MainMenu';
		}
		this.scene.start(levelName);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
