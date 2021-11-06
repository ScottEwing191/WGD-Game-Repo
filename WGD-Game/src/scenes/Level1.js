
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

		// player
		const player = this.add.image(128, 96, "Pencil_ball_256");
		player.scaleX = 0.25;
		player.scaleY = 0.25;

		// pencil_grass_dirt_2
		const pencil_grass_dirt_2 = this.add.image(320, 288, "platform_pencil_grass_2");
		pencil_grass_dirt_2.scaleY = 0.25;

		// pencil_grass_dirt_2_2
		const pencil_grass_dirt_2_2 = this.add.image(448, 96, "platform_pencil_grass_2");
		pencil_grass_dirt_2_2.scaleX = 0.25;
		pencil_grass_dirt_2_2.scaleY = 0.25;

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

		// pencil_25692
		const pencil_25692 = this.add.image(192, 448, "Pencil_256", 92);
		pencil_25692.scaleX = 0.25;
		pencil_25692.scaleY = 0.25;

		// pencil_25692_1
		const pencil_25692_1 = this.add.image(256, 448, "Pencil_256", 92);
		pencil_25692_1.scaleX = 0.25;
		pencil_25692_1.scaleY = 0.25;

		// jump_pad
		const jump_pad = this.add.sprite(128, 192, "Pencil_256", 73);
		jump_pad.scaleX = 0.25;
		jump_pad.scaleY = 0.25;

		// jump_pad_1
		const jump_pad_1 = this.add.sprite(320, 192, "Pencil_256", 73);
		jump_pad_1.scaleX = 0.25;
		jump_pad_1.scaleY = 0.25;

		// crayon_25673
		const crayon_25673 = this.add.image(192, 192, "Crayon_256", 73);
		crayon_25673.scaleX = 0.25;
		crayon_25673.scaleY = 0.25;

		// lists
		const movableObjects = [pencil_grass_dirt_2, pencil_grass_dirt_2_2, pencil_grass_dirt_2_3, jump_pad, jump_pad_1]
		const jumpPads = [jump_pad, jump_pad_1]

		// player (components)
		const playerCirclePhysics = new CirclePhysics(player);
		playerCirclePhysics.radius = 24;
		playerCirclePhysics.bounce = 1;
		new Respawn(player);
		new Player(player);

		// pencil_grass_dirt_2 (components)
		const pencil_grass_dirt_2RectanglePhysics = new RectanglePhysics(pencil_grass_dirt_2);
		pencil_grass_dirt_2RectanglePhysics.modifyYPosition = 16;
		new ControllableObject(pencil_grass_dirt_2);

		// pencil_grass_dirt_2_2 (components)
		const pencil_grass_dirt_2_2RectanglePhysics = new RectanglePhysics(pencil_grass_dirt_2_2);
		pencil_grass_dirt_2_2RectanglePhysics.modifyYPosition = 16;
		new ControllableObject(pencil_grass_dirt_2_2);

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

		// pencil_25692 (components)
		const pencil_25692RectanglePhysics = new RectanglePhysics(pencil_25692);
		pencil_25692RectanglePhysics.modifyBodyHeight = -16;
		pencil_25692RectanglePhysics.modifyYPosition = -8;
		pencil_25692RectanglePhysics.spriteYOffset = 0.125;
		new ControllableObject(pencil_25692);

		// pencil_25692_1 (components)
		new RectanglePhysics(pencil_25692_1);
		new ControllableObject(pencil_25692_1);

		// jump_pad (components)
		const jump_padJumpPad = new JumpPad(jump_pad);
		jump_padJumpPad.force = 8;
		const jump_padRectanglePhysics = new RectanglePhysics(jump_pad);
		jump_padRectanglePhysics.isSensor = true;
		jump_padRectanglePhysics.modifyBodyWidth = -24;
		jump_padRectanglePhysics.modifyBodyHeight = -56;
		jump_padRectanglePhysics.modifyYPosition = 4;
		jump_padRectanglePhysics.spriteYOffset = 0.4375;
		new ControllableObject(jump_pad);

		// jump_pad_1 (components)
		const jump_pad_1JumpPad = new JumpPad(jump_pad_1);
		jump_pad_1JumpPad.force = 8;
		const jump_pad_1RectanglePhysics = new RectanglePhysics(jump_pad_1);
		jump_pad_1RectanglePhysics.isSensor = true;
		jump_pad_1RectanglePhysics.modifyBodyWidth = -24;
		jump_pad_1RectanglePhysics.modifyBodyHeight = -56;
		jump_pad_1RectanglePhysics.modifyYPosition = 4;
		jump_pad_1RectanglePhysics.spriteYOffset = 0.4375;
		new ControllableObject(jump_pad_1);

		this.player = player;
		this.gameManager = gameManager;
		this.level_1 = level_1;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	player;
	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
	/** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
	movableObjects;
	/** @type {Phaser.GameObjects.Sprite[]} */
	jumpPads;

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
