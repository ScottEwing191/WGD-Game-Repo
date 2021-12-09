
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

		// gameManager
		const gameManager = this.add.rectangle(1114, 165, 128, 128);
		gameManager.isFilled = true;

		// antiGrav_Layer
		const antiGrav_Layer = this.add.layer();

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 416, -512, "Space_1x2_noBorder");
		antiGravZone1x2Prefab.scaleX = 0.6;
		antiGravZone1x2Prefab.scaleY = 0.6;
		antiGrav_Layer.add(antiGravZone1x2Prefab);

		// antiGravZone1x2Prefab_1
		const antiGravZone1x2Prefab_1 = new AntiGravZone1x2Prefab(this, 880, -512, "Space_1x2_noBorder");
		antiGravZone1x2Prefab_1.scaleX = 0.6;
		antiGravZone1x2Prefab_1.scaleY = 0.6;
		antiGrav_Layer.add(antiGravZone1x2Prefab_1);

		// space_1x2_noBorder
		const space_1x2_noBorder = this.add.image(416, 416, "Space_1x2_noBorder");
		space_1x2_noBorder.scaleX = 0.6;
		space_1x2_noBorder.scaleY = 0.6;
		antiGrav_Layer.add(space_1x2_noBorder);

		// space_1x2_noBorder_1
		const space_1x2_noBorder_1 = this.add.image(880, 416, "Space_1x2_noBorder");
		space_1x2_noBorder_1.scaleX = 0.6;
		space_1x2_noBorder_1.scaleY = 0.6;
		antiGrav_Layer.add(space_1x2_noBorder_1);

		// ground_1
		const ground_1 = level06.createLayer("Ground", ["Crayon_Tileset"], 0, 0);
		ground_1.scaleX = 0.25;
		ground_1.scaleY = 0.25;

		// spikes_Layer
		const spikes_Layer = this.add.layer();

		// spike1Left
		const spike1Left = new Spike1Left(this, 32, 96, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left);

		// spike1Right
		const spike1Right = new Spike1Right(this, 160, 96, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right);

		// spike1Down
		const spike1Down = new Spike1Down(this, 96, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down);

		// spike1Up
		const spike1Up = new Spike1Up(this, 352, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up);

		// spike1Left_1
		const spike1Left_1 = new Spike1Left(this, 32, 160, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1);

		// spike1Right_1
		const spike1Right_1 = new Spike1Right(this, 160, 160, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1);

		// spike1Left_1_1
		const spike1Left_1_1 = new Spike1Left(this, 32, 224, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_1);

		// spike1Right_1_1
		const spike1Right_1_1 = new Spike1Right(this, 160, 224, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_1);

		// spike1Left_1_2
		const spike1Left_1_2 = new Spike1Left(this, 32, 288, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_2);

		// spike1Right_1_2
		const spike1Right_1_2 = new Spike1Right(this, 160, 288, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_2);

		// spike1Left_1_3
		const spike1Left_1_3 = new Spike1Left(this, 32, 352, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_3);

		// spike1Right_1_3
		const spike1Right_1_3 = new Spike1Right(this, 160, 352, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_3);

		// spike1Left_1_4
		const spike1Left_1_4 = new Spike1Left(this, 32, 416, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_4);

		// spike1Right_1_4
		const spike1Right_1_4 = new Spike1Right(this, 160, 416, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_4);

		// spike1Left_1_5
		const spike1Left_1_5 = new Spike1Left(this, 32, 480, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_5);

		// spike1Right_1_5
		const spike1Right_1_5 = new Spike1Right(this, 160, 480, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_5);

		// spike1Left_1_6
		const spike1Left_1_6 = new Spike1Left(this, 32, 544, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_6);

		// spike1Right_1_6
		const spike1Right_1_6 = new Spike1Right(this, 160, 544, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_6);

		// spike1Left_1_7
		const spike1Left_1_7 = new Spike1Left(this, 32, 608, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_7);

		// spike1Right_1_7
		const spike1Right_1_7 = new Spike1Right(this, 160, 608, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_7);

		// spike1Left_1_7_1
		const spike1Left_1_7_1 = new Spike1Left(this, 288, 608, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_7_1);

		// spike1Left_1_6_1
		const spike1Left_1_6_1 = new Spike1Left(this, 288, 544, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_6_1);

		// spike1Left_1_5_1
		const spike1Left_1_5_1 = new Spike1Left(this, 288, 480, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_5_1);

		// spike1Left_1_4_1
		const spike1Left_1_4_1 = new Spike1Left(this, 288, 416, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_4_1);

		// spike1Left_1_3_1
		const spike1Left_1_3_1 = new Spike1Left(this, 288, 352, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_3_1);

		// spike1Left_1_2_1
		const spike1Left_1_2_1 = new Spike1Left(this, 288, 288, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_2_1);

		// spike1Left_1_1_1
		const spike1Left_1_1_1 = new Spike1Left(this, 288, 224, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_1_1);

		// spike1Left_1_8
		const spike1Left_1_8 = new Spike1Left(this, 288, 160, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_8);

		// spike1Left_2
		const spike1Left_2 = new Spike1Left(this, 288, 96, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_2);

		// spike1Right_1_7_1
		const spike1Right_1_7_1 = new Spike1Right(this, 992, 672, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_7_1);

		// spike1Right_1_6_1
		const spike1Right_1_6_1 = new Spike1Right(this, 992, 608, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_6_1);

		// spike1Right_1_5_1
		const spike1Right_1_5_1 = new Spike1Right(this, 992, 544, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_5_1);

		// spike1Right_1_4_1
		const spike1Right_1_4_1 = new Spike1Right(this, 992, 480, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_4_1);

		// spike1Right_1_3_1
		const spike1Right_1_3_1 = new Spike1Right(this, 992, 416, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_3_1);

		// spike1Right_1_2_1
		const spike1Right_1_2_1 = new Spike1Right(this, 992, 352, "Spikes_Crayon", 5);
		spikes_Layer.add(spike1Right_1_2_1);

		// spike1Left_2_1
		const spike1Left_2_1 = new Spike1Left(this, 32, 672, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_2_1);

		// spike1Left_1_8_1
		const spike1Left_1_8_1 = new Spike1Left(this, 32, 736, "Spikes_Crayon", 7);
		spikes_Layer.add(spike1Left_1_8_1);

		// spike1Up_1
		const spike1Up_1 = new Spike1Up(this, 416, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_1);

		// spike1Up_2
		const spike1Up_2 = new Spike1Up(this, 480, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_2);

		// spike1Up_3
		const spike1Up_3 = new Spike1Up(this, 544, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_3);

		// spike1Up_4
		const spike1Up_4 = new Spike1Up(this, 608, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_4);

		// spike1Up_5
		const spike1Up_5 = new Spike1Up(this, 672, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_5);

		// spike1Up_5_1
		const spike1Up_5_1 = new Spike1Up(this, 736, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_5_1);

		// spike1Up_5_2
		const spike1Up_5_2 = new Spike1Up(this, 800, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_5_2);

		// spike1Up_5_3
		const spike1Up_5_3 = new Spike1Up(this, 864, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_5_3);

		// spike1Up_5_4
		const spike1Up_5_4 = new Spike1Up(this, 928, 32, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_5_4);

		// spike1Down_1
		const spike1Down_1 = new Spike1Down(this, 160, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_1);

		// spike1Down_2
		const spike1Down_2 = new Spike1Down(this, 224, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_2);

		// spike1Down_2_1
		const spike1Down_2_1 = new Spike1Down(this, 352, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_2_1);

		// spike1Down_1_1
		const spike1Down_1_1 = new Spike1Down(this, 288, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_1_1);

		// spike1Down_2_2
		const spike1Down_2_2 = new Spike1Down(this, 480, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_2_2);

		// spike1Down_1_2
		const spike1Down_1_2 = new Spike1Down(this, 416, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_1_2);

		// spike1Down_2_3
		const spike1Down_2_3 = new Spike1Down(this, 608, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_2_3);

		// spike1Down_1_3
		const spike1Down_1_3 = new Spike1Down(this, 544, 800, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_1_3);

		// spike1Down_2_4
		const spike1Down_2_4 = new Spike1Down(this, 784, 736, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_2_4);

		// spike1Down_1_4
		const spike1Down_1_4 = new Spike1Down(this, 720, 736, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_1_4);

		// spike1Down_2_5
		const spike1Down_2_5 = new Spike1Down(this, 912, 736, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_2_5);

		// spike1Down_1_5
		const spike1Down_1_5 = new Spike1Down(this, 848, 736, "Spikes_Crayon", 6);
		spikes_Layer.add(spike1Down_1_5);

		// spike1Up_5_4_1
		const spike1Up_5_4_1 = new Spike1Up(this, 224, 672, "Spikes_Crayon", 4);
		spikes_Layer.add(spike1Up_5_4_1);

		// jumpPads_Layer
		const jumpPads_Layer = this.add.layer();

		// jumpPadUnmovable
		const jumpPadUnmovable = new JumpPadUnmovable(this, 96, 768);
		jumpPadUnmovable.angle = 90;
		jumpPads_Layer.add(jumpPadUnmovable);

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 64, 96);
		jumpPads_Layer.add(jump_Pad);

		// jump_Pad_2
		const jump_Pad_2 = new Jump_Pad(this, 128, 96);
		jumpPads_Layer.add(jump_Pad_2);

		// jump_Pad_3
		const jump_Pad_3 = new Jump_Pad(this, 64, 64);
		jumpPads_Layer.add(jump_Pad_3);

		// jump_Pad_4
		const jump_Pad_4 = new Jump_Pad(this, 128, 64);
		jumpPads_Layer.add(jump_Pad_4);

		// unmovableCircles_Layer
		const unmovableCircles_Layer = this.add.layer();

		// circleBounceStatic
		const circleBounceStatic = new CircleBounceStatic(this, 416, 352, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic);

		// circleBounceStatic_1
		const circleBounceStatic_1 = new CircleBounceStatic(this, 544, 288, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_1);

		// circleBounceStatic_2
		const circleBounceStatic_2 = new CircleBounceStatic(this, 736, 224, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_2);

		// circleBounceStatic_3
		const circleBounceStatic_3 = new CircleBounceStatic(this, 608, 160, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_3);

		// circleBounceStatic_4
		const circleBounceStatic_4 = new CircleBounceStatic(this, 416, 160, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_4);

		// circleBounceStatic_5
		const circleBounceStatic_5 = new CircleBounceStatic(this, 736, 352, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_5);

		// circleBounceStatic_6
		const circleBounceStatic_6 = new CircleBounceStatic(this, 608, 544, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_6);

		// circleBounceStatic_7
		const circleBounceStatic_7 = new CircleBounceStatic(this, 480, 608, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_7);

		// circleBounceStatic_8
		const circleBounceStatic_8 = new CircleBounceStatic(this, 864, 608, "Crayon_256", 102);
		unmovableCircles_Layer.add(circleBounceStatic_8);

		// player
		const player = new PlayerPrefab(this, 96, 192);
		this.add.existing(player);

		// coin_P
		const coin_P = new Coin_P(this, 896, 336);
		this.add.existing(coin_P);

		// levelCompletePanel_P
		const levelCompletePanel_P = new LevelCompletePanel_P(this, 0, 0);
		this.add.existing(levelCompletePanel_P);

		// attemptsPanel_P
		const attemptsPanel_P = new AttemptsPanel_P(this, 896, 800);
		this.add.existing(attemptsPanel_P);

		// coin_empty_place
		const coin_empty_place = this.add.image(736, 800, "coin empty place");
		coin_empty_place.scaleX = 0.2;
		coin_empty_place.scaleY = 0.2;

		// levelEnd_P
		const levelEnd_P = new LevelEnd_P(this, 928, 128);
		this.add.existing(levelEnd_P);

		// MainMenuButton
		const mainMenuButton = this.add.sprite(32, 32, "btn_icon_home_1");

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// space_1x2_noBorder (components)
		const space_1x2_noBorderRectanglePhysics = new RectanglePhysics(space_1x2_noBorder);
		space_1x2_noBorderRectanglePhysics.isSensor = true;
		const space_1x2_noBorderAntiGravZone = new AntiGravZone(space_1x2_noBorder);
		space_1x2_noBorderAntiGravZone.zoneAirFriction = 0.001;

		// space_1x2_noBorder_1 (components)
		const space_1x2_noBorder_1RectanglePhysics = new RectanglePhysics(space_1x2_noBorder_1);
		space_1x2_noBorder_1RectanglePhysics.isSensor = true;
		const space_1x2_noBorder_1AntiGravZone = new AntiGravZone(space_1x2_noBorder_1);
		space_1x2_noBorder_1AntiGravZone.zoneAirFriction = 0.001;

		// jumpPadUnmovable (components)
		const jumpPadUnmovableRectanglePhysics = RectanglePhysics.getComponent(jumpPadUnmovable);
		jumpPadUnmovableRectanglePhysics.angle = 90;

		// levelCompletePanel_P.replayButton (components)
		const levelCompletePanel_P_replayButtonChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.replayButton);
		levelCompletePanel_P_replayButtonChangeLevelButton.levelName = "Level06";

		// levelCompletePanel_P.nextLevel (components)
		const levelCompletePanel_P_nextLevelChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.nextLevel);
		levelCompletePanel_P_nextLevelChangeLevelButton.levelName = "Level05";

		// mainMenuButton (components)
		const mainMenuButtonChangeLevelButton = new ChangeLevelButton(mainMenuButton);
		mainMenuButtonChangeLevelButton.changeAnimation = "";

		this.gameManager = gameManager;
		this.ground_1 = ground_1;
		this.player = player;
		this.coin_P = coin_P;
		this.levelCompletePanel_P = levelCompletePanel_P;
		this.attemptsPanel_P = attemptsPanel_P;
		this.level06 = level06;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	ground_1;
	/** @type {PlayerPrefab} */
	player;
	/** @type {Coin_P} */
	coin_P;
	/** @type {LevelCompletePanel_P} */
	levelCompletePanel_P;
	/** @type {AttemptsPanel_P} */
	attemptsPanel_P;
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

		this.sound.play("book_Page_Turn");					// play paper sound on scene start
	}

	nextLevel(levelName){
		if (levelName == undefined){
			levelName = 'Level05';
		}
		this.scene.start(levelName);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
