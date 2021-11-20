
// You can write more code here

/* START OF COMPILED CODE */

class Level02 extends Phaser.Scene {

	constructor() {
		super("Level02");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level02
		const level02 = this.add.tilemap("Level02");
		level02.addTilesetImage("Crayon_Tileset", "Crayon_256");
		level02.addTilesetImage("Pencil_Tileset", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// gameManager
		const gameManager = this.add.rectangle(1088, 64, 128, 128);
		gameManager.isFilled = true;

		// decoration
		const decoration = level02.createLayer("Decoration", ["Pencil_Tileset"], 0, 0);
		decoration.scaleX = 0.25;
		decoration.scaleY = 0.25;

		// solid_1
		const solid_1 = level02.createLayer("Solid", ["Crayon_Tileset"], 0, 0);
		solid_1.scaleX = 0.25;
		solid_1.scaleY = 0.25;

		// SpikesLayer
		const spikesLayer = this.add.layer();

		// spike2_left
		const spike2_left = this.add.image(1472, 224, "Spikes_Crayon", 7);
		spike2_left.scaleX = 0.25;
		spike2_left.scaleY = 0.25;
		spikesLayer.add(spike2_left);

		// spike2_down
		const spike2_down = this.add.image(1408, 224, "Spikes_Crayon", 6);
		spike2_down.scaleX = 0.25;
		spike2_down.scaleY = 0.25;
		spikesLayer.add(spike2_down);

		// spike2_right
		const spike2_right = this.add.image(1344, 224, "Spikes_Crayon", 5);
		spike2_right.scaleX = 0.25;
		spike2_right.scaleY = 0.25;
		spikesLayer.add(spike2_right);

		// spike2_up
		const spike2_up = this.add.image(1280, 224, "Spikes_Crayon", 4);
		spike2_up.scaleX = 0.25;
		spike2_up.scaleY = 0.25;
		spikesLayer.add(spike2_up);

		// spike1Left
		const spike1Left = new Spike1Left(this, 480, 352);
		spikesLayer.add(spike1Left);

		// spike1Left_1
		const spike1Left_1 = new Spike1Left(this, 480, 416);
		spikesLayer.add(spike1Left_1);

		// spike1Left_1_1
		const spike1Left_1_1 = new Spike1Left(this, 32, 416);
		spikesLayer.add(spike1Left_1_1);

		// spike1Left_1_2
		const spike1Left_1_2 = new Spike1Left(this, 32, 480);
		spikesLayer.add(spike1Left_1_2);

		// spike1Left_1_3
		const spike1Left_1_3 = new Spike1Left(this, 32, 544);
		spikesLayer.add(spike1Left_1_3);

		// spike1Down
		const spike1Down = new Spike1Down(this, 288, 800);
		spikesLayer.add(spike1Down);

		// spike1Down_1
		const spike1Down_1 = new Spike1Down(this, 352, 800);
		spikesLayer.add(spike1Down_1);

		// spike1Down_2
		const spike1Down_2 = new Spike1Down(this, 416, 800);
		spikesLayer.add(spike1Down_2);

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 960, 384);
		this.add.existing(jump_Pad);

		// jump_Pad_1
		const jump_Pad_1 = new Jump_Pad(this, 960, 480);
		this.add.existing(jump_Pad_1);

		// jump_Pad_2
		const jump_Pad_2 = new Jump_Pad(this, 896, 480);
		this.add.existing(jump_Pad_2);

		// jump_Pad_3
		const jump_Pad_3 = new Jump_Pad(this, 832, 480);
		this.add.existing(jump_Pad_3);

		// platformGrassBig
		const platformGrassBig = new PlatformGrassBig(this, 896, 544);
		this.add.existing(platformGrassBig);

		// platformGrassSmall_1
		const platformGrassSmall_1 = new PlatformGrassSmall(this, 928, 448);
		this.add.existing(platformGrassSmall_1);

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 928, 352);
		this.add.existing(platformGrassSmall);

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 928, 160);
		this.add.existing(antiGravZone1x2Prefab);

		// player
		const player = new PlayerPrefab(this, 224, 64);
		this.add.existing(player);

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// spike2_left (components)
		const spike2_leftRectanglePhysics = new RectanglePhysics(spike2_left);
		spike2_leftRectanglePhysics.modifyBodyWidth = -44;
		spike2_leftRectanglePhysics.modifyBodyHeight = -16;
		spike2_leftRectanglePhysics.modifyXPosition = 22;
		spike2_leftRectanglePhysics.spriteXOffset = -0.34375;
		new Spike(spike2_left);

		// spike2_down (components)
		const spike2_downRectanglePhysics = new RectanglePhysics(spike2_down);
		spike2_downRectanglePhysics.modifyBodyWidth = -16;
		spike2_downRectanglePhysics.modifyBodyHeight = -44;
		spike2_downRectanglePhysics.modifyYPosition = -22;
		spike2_downRectanglePhysics.spriteYOffset = 0.34375;
		new Spike(spike2_down);

		// spike2_right (components)
		const spike2_rightRectanglePhysics = new RectanglePhysics(spike2_right);
		spike2_rightRectanglePhysics.modifyBodyWidth = -44;
		spike2_rightRectanglePhysics.modifyBodyHeight = -16;
		spike2_rightRectanglePhysics.modifyXPosition = -22;
		spike2_rightRectanglePhysics.spriteXOffset = 0.34375;
		new Spike(spike2_right);

		// spike2_up (components)
		const spike2_upRectanglePhysics = new RectanglePhysics(spike2_up);
		spike2_upRectanglePhysics.modifyBodyWidth = -16;
		spike2_upRectanglePhysics.modifyBodyHeight = -44;
		spike2_upRectanglePhysics.modifyYPosition = 22;
		spike2_upRectanglePhysics.spriteYOffset = -0.34375;
		new Spike(spike2_up);

		this.gameManager = gameManager;
		this.solid_1 = solid_1;
		this.player = player;
		this.level02 = level02;
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
		this.level02.setCollisionByProperty({collider :true});
		this.matter.world.convertTilemapLayer(this.solid_1);
	}

	nextLevel(){
		this.scene.start("Level03");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
