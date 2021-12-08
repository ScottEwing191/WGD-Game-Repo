
// You can write more code here

/* START OF COMPILED CODE */

class Level03 extends Phaser.Scene {

	constructor() {
		super("Level03");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level03
		const level03 = this.add.tilemap("Level03");
		level03.addTilesetImage("Crayon_Tileset", "Crayon_256");
		level03.addTilesetImage("Pencil_Tileset", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// gameManager
		const gameManager = this.add.rectangle(1088, 64, 128, 128);
		gameManager.isFilled = true;

		// decoration
		const decoration = level03.createLayer("Decoration", ["Crayon_Tileset"], 0, 0);
		decoration.scaleX = 0.25;
		decoration.scaleY = 0.25;

		// antiGravZonePrefab
		const antiGravZonePrefab = new AntiGravZonePrefab(this, 608, 704);
		this.add.existing(antiGravZonePrefab);
		antiGravZonePrefab.visible = false;

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 416, 480);
		this.add.existing(antiGravZone1x2Prefab);
		antiGravZone1x2Prefab.angle = 90;
		antiGravZone1x2Prefab.visible = false;

		// spikesLayer
		const spikesLayer = this.add.layer();

		// spike1Left
		const spike1Left = new Spike1Left(this, 288, 480, "Spikes_Crayon", 11);
		spikesLayer.add(spike1Left);

		// spike1Left_1
		const spike1Left_1 = new Spike1Left(this, 288, 544, "Spikes_Crayon", 11);
		spikesLayer.add(spike1Left_1);

		// spike1Left_2
		const spike1Left_2 = new Spike1Left(this, 288, 608, "Spikes_Crayon", 11);
		spikesLayer.add(spike1Left_2);

		// spike1Left_3
		const spike1Left_3 = new Spike1Left(this, 288, 672, "Spikes_Crayon", 11);
		spikesLayer.add(spike1Left_3);

		// spike4Up
		const spike4Up = new Spike4Up(this, 608, 672);
		spikesLayer.add(spike4Up);

		// spike4Down
		const spike4Down = new Spike4Down(this, 608, 736);
		spikesLayer.add(spike4Down);

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 461, 370);
		this.add.existing(platformGrassSmall);
		platformGrassSmall.visible = false;

		// platformGrassSmall_1
		const platformGrassSmall_1 = new PlatformGrassSmall(this, 192, 320);
		this.add.existing(platformGrassSmall_1);
		platformGrassSmall_1.visible = false;

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 96, 64);
		this.add.existing(jump_Pad);
		jump_Pad.visible = false;

		// jumpPadUnmovable
		const jumpPadUnmovable = new JumpPadUnmovable(this, 96, 736);
		this.add.existing(jumpPadUnmovable);

		// solid_1
		const solid_1 = level03.createLayer("Solid", ["Crayon_Tileset"], 0, 0);
		solid_1.scaleX = 0.25;
		solid_1.scaleY = 0.25;

		// player
		const player = new PlayerPrefab(this, 960, 64);
		this.add.existing(player);

		// jump_Pad_1
		const jump_Pad_1 = new Jump_Pad(this, 800, 160);
		this.add.existing(jump_Pad_1);
		jump_Pad_1.visible = false;

		// platformGrassSmall_2
		const platformGrassSmall_2 = new PlatformGrassSmall(this, 928, 192);
		this.add.existing(platformGrassSmall_2);
		platformGrassSmall_2.visible = false;

		// jump_Pad_2
		const jump_Pad_2 = new Jump_Pad(this, 320, 256);
		this.add.existing(jump_Pad_2);
		jump_Pad_2.visible = false;

		// circleBounce
		const circleBounce = new CircleBounce(this, 288, 416);
		this.add.existing(circleBounce);
		circleBounce.visible = false;

		// circleNoBounceStatic
		const circleNoBounceStatic = new CircleNoBounceStatic(this, 544, 192);
		this.add.existing(circleNoBounceStatic);

		// jump_Pad_3
		const jump_Pad_3 = new Jump_Pad(this, 317, 163);
		this.add.existing(jump_Pad_3);
		jump_Pad_3.visible = false;

		// levelEnd_P
		const levelEnd_P = new LevelEnd_P(this, 736, 672);
		this.add.existing(levelEnd_P);

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

		// coin_P
		const coin_P = new Coin_P(this, 160, 96);
		this.add.existing(coin_P);

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// antiGravZone1x2Prefab (components)
		const antiGravZone1x2PrefabRectanglePhysics = RectanglePhysics.getComponent(antiGravZone1x2Prefab);
		antiGravZone1x2PrefabRectanglePhysics.angle = 90;

		// player (components)
		new ControllableObject(player);

		// levelCompletePanel_P.replayButton (components)
		const levelCompletePanel_P_replayButtonChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.replayButton);
		levelCompletePanel_P_replayButtonChangeLevelButton.levelName = "Level03";

		// levelCompletePanel_P.nextLevel (components)
		const levelCompletePanel_P_nextLevelChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.nextLevel);
		levelCompletePanel_P_nextLevelChangeLevelButton.levelName = "Level04";

		this.gameManager = gameManager;
		this.solid_1 = solid_1;
		this.player = player;
		this.levelCompletePanel_P = levelCompletePanel_P;
		this.attemptsPanel_P = attemptsPanel_P;
		this.coin_P = coin_P;
		this.level03 = level03;
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
		this.level03.setCollisionByProperty({collider :true});
		this.matter.world.convertTilemapLayer(this.solid_1);
		//this.matter.set60Hz();

	}

	/*nextLevel(){
		this.scene.start("Level04");
	}*/
	nextLevel(levelName){
		if (levelName == undefined){
			levelName = 'Level04';
		}
		this.scene.start(levelName);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
