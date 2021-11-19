
// You can write more code here

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

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// gameManager
		const gameManager = this.add.rectangle(960, 64, 128, 128);
		gameManager.isFilled = true;

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 128, 352);
		this.add.existing(antiGravZone1x2Prefab);

		// player
		const player = new PlayerPrefab(this, 155, 119);
		this.add.existing(player);

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		this.gameManager = gameManager;
		this.player = player;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
	/** @type {PlayerPrefab} */
	player;
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
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
