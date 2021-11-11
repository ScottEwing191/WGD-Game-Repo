
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

		// pencil_grass_dirt_2
		const pencil_grass_dirt_2 = this.add.image(320, 288, "platform_pencil_grass_2");
		pencil_grass_dirt_2.scaleY = 0.25;

		// platformGrassSmall
		const platformGrassSmall = this.add.image(576, 192, "platform_pencil_grass_2");
		platformGrassSmall.scaleX = 0.25;
		platformGrassSmall.scaleY = 0.25;

		// pencil_grass_dirt_2_3
		const pencil_grass_dirt_2_3 = this.add.image(704, 96, "platform_pencil_grass_2");
		pencil_grass_dirt_2_3.scaleX = 0.25;
		pencil_grass_dirt_2_3.scaleY = 0.25;

		// gameManager
		const gameManager = this.add.rectangle(1056, 64, 128, 128);
		gameManager.isFilled = true;

		// pencil_25627
		const pencil_25627 = this.add.image(320, 352, "Pencil_256", 27);
		pencil_25627.scaleX = 0.25;
		pencil_25627.scaleY = 0.25;

		// pencil_rock_3
		const pencil_rock_3 = this.add.image(512, 480, "Pencil_rock_3");
		pencil_rock_3.scaleX = 0.25;
		pencil_rock_3.scaleY = 0.25;

		// pencil_rock_3_1
		const pencil_rock_3_1 = this.add.image(704, 480, "Pencil_rock_3");
		pencil_rock_3_1.scaleX = 0.25;
		pencil_rock_3_1.scaleY = 0.25;

		// jumpPadUnmovable
		const jumpPadUnmovable = new JumpPadUnmovable(this, 480, 192);
		this.add.existing(jumpPadUnmovable);

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 288, 128);
		this.add.existing(jump_Pad);

		// spikes_1
		const spikes_1 = this.add.image(480, 64, "Pencil_256", 71);
		spikes_1.scaleX = 0.25;
		spikes_1.scaleY = 0.25;

		// player
		const player = this.add.image(128, 96, "Pencil_ball_256");
		player.scaleX = 0.25;
		player.scaleY = 0.25;

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = [spikes_1]

		// pencil_grass_dirt_2 (components)
		const pencil_grass_dirt_2RectanglePhysics = new RectanglePhysics(pencil_grass_dirt_2);
		pencil_grass_dirt_2RectanglePhysics.modifyYPosition = 16;
		new ControllableObject(pencil_grass_dirt_2);

		// platformGrassSmall (components)
		const platformGrassSmallRectanglePhysics = new RectanglePhysics(platformGrassSmall);
		platformGrassSmallRectanglePhysics.modifyYPosition = 16;
		new ControllableObject(platformGrassSmall);

		// pencil_grass_dirt_2_3 (components)
		const pencil_grass_dirt_2_3RectanglePhysics = new RectanglePhysics(pencil_grass_dirt_2_3);
		pencil_grass_dirt_2_3RectanglePhysics.modifyYPosition = 16;
		new ControllableObject(pencil_grass_dirt_2_3);

		// gameManager (components)
		new GameManager(gameManager);

		// pencil_25627 (components)
		const pencil_25627RectanglePhysics = new RectanglePhysics(pencil_25627);
		pencil_25627RectanglePhysics.modifyBodyHeight = -48;
		pencil_25627RectanglePhysics.modifyYPosition = 8;
		pencil_25627RectanglePhysics.spriteYOffset = 0.375;

		// pencil_rock_3 (components)
		const pencil_rock_3RectanglePhysics = new RectanglePhysics(pencil_rock_3);
		pencil_rock_3RectanglePhysics.modifyBodyHeight = -32;
		pencil_rock_3RectanglePhysics.modifyYPosition = 16;
		pencil_rock_3RectanglePhysics.spriteYOffset = -0.25;
		new ControllableObject(pencil_rock_3);

		// pencil_rock_3_1 (components)
		new RectanglePhysics(pencil_rock_3_1);

		// spikes_1 (components)
		const spikes_1RectanglePhysics = new RectanglePhysics(spikes_1);
		spikes_1RectanglePhysics.modifyBodyHeight = -44;
		spikes_1RectanglePhysics.modifyYPosition = 10;
		spikes_1RectanglePhysics.spriteYOffset = 0.34375;
		new Spike(spikes_1);

		// player (components)
		const playerCirclePhysics = new CirclePhysics(player);
		playerCirclePhysics.radius = 24;
		playerCirclePhysics.bounce = 1;
		new Respawn(player);
		new Player(player);

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
	/** @type {Phaser.GameObjects.Image} */
	player;
	/** @type {Array<any>} */
	movableObjects;
	/** @type {Array<any>} */
	jumpPads;
	/** @type {Phaser.GameObjects.Image[]} */
	spikes;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.matter.world.setBounds(16,16, 848, 762, 64,true, true, true, false);

		//this.jump_pad.play('jump-pad-active');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
