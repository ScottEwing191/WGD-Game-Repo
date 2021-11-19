
// You can write more code here

/* START OF COMPILED CODE */

class LevelTest extends Phaser.Scene {

	constructor() {
		super("LevelTest");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// levelTest_map
		const levelTest_map = this.add.tilemap("LevelTest_map");
		levelTest_map.addTilesetImage("Crayon_Tileset", "Crayon_256");
		levelTest_map.addTilesetImage("Pencil_Tileset", "Pencil_256");

		// square_Paper_2_Seamless_On_Grid
		const square_Paper_2_Seamless_On_Grid = this.add.tileSprite(0, 0, 960, 720, "Square Paper 2 Seamless_On Grid");
		square_Paper_2_Seamless_On_Grid.setOrigin(0, 0);
		square_Paper_2_Seamless_On_Grid.tilePositionX = 100;
		square_Paper_2_Seamless_On_Grid.tileScaleX = 0.177;
		square_Paper_2_Seamless_On_Grid.tileScaleY = 0.177;

		// gameManager
		const gameManager = this.add.rectangle(1056, 64, 128, 128);
		gameManager.isFilled = true;

		// spring_Spikes_etc_Guide
		const spring_Spikes_etc_Guide = levelTest_map.createLayer("Spring/Spikes etc Guide", ["Crayon_Tileset","Pencil_Tileset"], 0, 0);
		spring_Spikes_etc_Guide.scaleX = 0.25;
		spring_Spikes_etc_Guide.scaleY = 0.25;
		spring_Spikes_etc_Guide.visible = false;

		// border_1
		const border_1 = levelTest_map.createLayer("Border", ["Crayon_Tileset"], 0, 0);
		border_1.scaleX = 0.25;
		border_1.scaleY = 0.25;

		// ground
		const ground = levelTest_map.createLayer("Ground", ["Crayon_Tileset"], 0, 0);
		ground.scaleX = 0.25;
		ground.scaleY = 0.25;

		// spikePrefab
		const spikePrefab = new SpikePrefab(this, 32, 224);
		this.add.existing(spikePrefab);

		// spikePrefab_1
		const spikePrefab_1 = new SpikePrefab(this, 96, 224);
		this.add.existing(spikePrefab_1);

		// spikePrefab_1_1
		const spikePrefab_1_1 = new SpikePrefab(this, 160, 224);
		this.add.existing(spikePrefab_1_1);

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 96, 160);
		this.add.existing(jump_Pad);

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 256, 96);
		this.add.existing(platformGrassSmall);

		// platformGrassSmall_1
		const platformGrassSmall_1 = new PlatformGrassSmall(this, 608, 96);
		this.add.existing(platformGrassSmall_1);

		// platformGrassSmall_2
		const platformGrassSmall_2 = new PlatformGrassSmall(this, 256, 544);
		this.add.existing(platformGrassSmall_2);

		// jump_Pad_1
		const jump_Pad_1 = new Jump_Pad(this, 480, 480);
		this.add.existing(jump_Pad_1);

		// player
		const player = new PlayerPrefab(this, 96, 64);
		this.add.existing(player);

		// antiGravZonePrefab
		const antiGravZonePrefab = new AntiGravZonePrefab(this, 512, 160);
		this.add.existing(antiGravZonePrefab);
		antiGravZonePrefab.scaleX = 0.5;
		antiGravZonePrefab.scaleY = 2;

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		this.gameManager = gameManager;
		this.border_1 = border_1;
		this.ground = ground;
		this.player = player;
		this.levelTest_map = levelTest_map;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	border_1;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	ground;
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
		//this.levelTest_map.setCollisionByProperty({collider :true});
		//this.matter.world.convertTilemapLayer(this.border_1);

		this.levelTest_map.setCollisionByProperty({collider :true});
		this.matter.world.convertTilemapLayer(this.ground);
	}

	nextLevel(){
		this.scene.start("Level01");
	}

	resetPlayer(){
		const newPlayer = new PlayerPrefab(this, 96, 64);
		this.add.existing(newPlayer);
		this.player = newPlayer;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
