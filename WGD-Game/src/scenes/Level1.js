
// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level_1
		const level_1 = this.add.tilemap("Level_1");
		level_1.addTilesetImage("Pencil_64");
		level_1.addTilesetImage("PencilTileset_256", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 960, 720, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// ground
		const ground = level_1.createLayer("Ground", ["PencilTileset_256"], -64, -64);
		ground.scaleX = 0.25;
		ground.scaleY = 0.25;

		// border_1
		const border_1 = level_1.createLayer("Border", ["PencilTileset_256"], -64, -64);
		border_1.scaleX = 0.25;
		border_1.scaleY = 0.25;

		// gameManager
		const gameManager = this.add.rectangle(1056, 64, 128, 128);
		gameManager.isFilled = true;

		// jumpPadUnmovable
		const jumpPadUnmovable = new JumpPadUnmovable(this, 480, 192);
		this.add.existing(jumpPadUnmovable);

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 384, 96);
		this.add.existing(jump_Pad);

		// spikePrefab
		const spikePrefab = new SpikePrefab(this, 224, 544);
		this.add.existing(spikePrefab);

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 640, 192, "platform_pencil_grass_2");
		this.add.existing(platformGrassSmall);

		// platformGrassSmall_1
		const platformGrassSmall_1 = new PlatformGrassSmall(this, 640, 96);
		this.add.existing(platformGrassSmall_1);

		// antiGravZonePrefab
		const antiGravZonePrefab = new AntiGravZonePrefab(this, 480, 448);
		this.add.existing(antiGravZonePrefab);

		// player
		const player = new PlayerPrefab(this, 224, 96);
		this.add.existing(player);

		// platformGrassBig_1
		const platformGrassBig_1 = new PlatformGrassBig(this, 416, 192);
		this.add.existing(platformGrassBig_1);

		// pencil_256100
		const pencil_256100 = this.add.image(416, 320, "Pencil_256", 100);
		pencil_256100.scaleX = 0.25;
		pencil_256100.scaleY = 0.25;

		// pencil_256100_1
		const pencil_256100_1 = this.add.image(320, 320, "Pencil_256", 100);
		pencil_256100_1.scaleX = 0.25;
		pencil_256100_1.scaleY = 0.25;

		// roundNoBounce
		const roundNoBounce = this.add.image(384, 256, "Pencil_256", 100);
		roundNoBounce.scaleX = 0.25;
		roundNoBounce.scaleY = 0.25;

		// antiGravZonePrefab_1
		const antiGravZonePrefab_1 = new AntiGravZonePrefab(this, 352, 448);
		this.add.existing(antiGravZonePrefab_1);

		// antiGravZonePrefab_1_1
		const antiGravZonePrefab_1_1 = new AntiGravZonePrefab(this, 96, 448);
		this.add.existing(antiGravZonePrefab_1_1);

		// antiGravZonePrefab_1_3
		const antiGravZonePrefab_1_3 = new AntiGravZonePrefab(this, 224, 448);
		this.add.existing(antiGravZonePrefab_1_3);

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 224, 256);
		this.add.existing(antiGravZone1x2Prefab);

		// antiGravZone1x2Prefab_1
		const antiGravZone1x2Prefab_1 = new AntiGravZone1x2Prefab(this, 608, 384);
		this.add.existing(antiGravZone1x2Prefab_1);

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// pencil_256100 (components)
		new ControllableObject(pencil_256100);
		const pencil_256100CirclePhysics = new CirclePhysics(pencil_256100);
		pencil_256100CirclePhysics.bounce = 0;
		pencil_256100CirclePhysics.isStatic = true;

		// pencil_256100_1 (components)
		new ControllableObject(pencil_256100_1);
		const pencil_256100_1CirclePhysics = new CirclePhysics(pencil_256100_1);
		pencil_256100_1CirclePhysics.bounce = 0;
		pencil_256100_1CirclePhysics.isStatic = true;

		// roundNoBounce (components)
		new ControllableObject(roundNoBounce);
		const roundNoBounceCirclePhysics = new CirclePhysics(roundNoBounce);
		roundNoBounceCirclePhysics.bounce = 0;
		roundNoBounceCirclePhysics.isStatic = true;

		this.gameManager = gameManager;
		this.player = player;
		this.level_1 = level_1;
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
		this.matter.world.setBounds(16,16, 848, 762, 64,true, true, true, false);

		//this.collisionTest2_map.setCollisionByProperty({collider :true});
		//this.matter.world.convertTilemapLayer(this.collision_1_1);

		//this.scene.start("LevelTest");


	}

	nextLevel(){
		this.scene.start("LevelTest");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
