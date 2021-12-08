
// You can write more code here

/* START OF COMPILED CODE */

class Level04 extends Phaser.Scene {

	constructor() {
		super("Level04");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// level04
		const level04 = this.add.tilemap("Level04");
		level04.addTilesetImage("Crayon_Tileset", "Crayon_256");
		level04.addTilesetImage("Pencil_Tileset", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 1024, 832, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// decoration
		const decoration = level04.createLayer("Decoration", ["Crayon_Tileset","Pencil_Tileset"], 0, 0);
		decoration.scaleX = 0.25;
		decoration.scaleY = 0.25;

		// solid
		const solid = level04.createLayer("Solid", ["Crayon_Tileset"], 0, 0);
		solid.scaleX = 0.25;
		solid.scaleY = 0.25;

		// gameManager
		const gameManager = this.add.rectangle(1088, 64, 128, 128);
		gameManager.isFilled = true;

		// spaceLayer
		const spaceLayer = this.add.layer();

		// antiGravZone1x2Prefab
		const antiGravZone1x2Prefab = new AntiGravZone1x2Prefab(this, 640, 704);
		spaceLayer.add(antiGravZone1x2Prefab);

		// antiGravZonePrefab
		const antiGravZonePrefab = new AntiGravZonePrefab(this, 576, 320);
		spaceLayer.add(antiGravZonePrefab);

		// spikesLayer
		const spikesLayer = this.add.layer();

		// spike4Up
		const spike4Up = new Spike4Up(this, 288, 672);
		spikesLayer.add(spike4Up);

		// spike4Up_1
		const spike4Up_1 = new Spike4Up(this, 352, 672);
		spikesLayer.add(spike4Up_1);

		// spike4Up_2
		const spike4Up_2 = new Spike4Up(this, 224, 672);
		spikesLayer.add(spike4Up_2);

		// spike1Down
		const spike1Down = new Spike1Down(this, 288, 736, "Spikes_Crayon", 6);
		spikesLayer.add(spike1Down);

		// spike1Down_1
		const spike1Down_1 = new Spike1Down(this, 352, 736, "Spikes_Crayon", 6);
		spikesLayer.add(spike1Down_1);

		// spike1Down_2
		const spike1Down_2 = new Spike1Down(this, 224, 736, "Spikes_Crayon", 6);
		spikesLayer.add(spike1Down_2);

		// spike4Up_3
		const spike4Up_3 = new Spike4Up(this, 800, 672);
		spikesLayer.add(spike4Up_3);

		// spike4Down
		const spike4Down = new Spike4Down(this, 800, 736);
		spikesLayer.add(spike4Down);

		// spike4Up_3_1
		const spike4Up_3_1 = new Spike4Up(this, 608, 672);
		spikesLayer.add(spike4Up_3_1);

		// spike4Down_1
		const spike4Down_1 = new Spike4Down(this, 608, 736);
		spikesLayer.add(spike4Down_1);

		// spike4Up_3_2
		const spike4Up_3_2 = new Spike4Up(this, 672, 672);
		spikesLayer.add(spike4Up_3_2);

		// spike4Down_2
		const spike4Down_2 = new Spike4Down(this, 672, 736);
		spikesLayer.add(spike4Down_2);

		// spike4Up_3_3
		const spike4Up_3_3 = new Spike4Up(this, 736, 672);
		spikesLayer.add(spike4Up_3_3);

		// spike4Down_3
		const spike4Down_3 = new Spike4Down(this, 736, 736);
		spikesLayer.add(spike4Down_3);

		// circlesLayer
		const circlesLayer = this.add.layer();

		// circleBounce
		const circleBounce = new CircleBounce(this, 512, 160);
		circlesLayer.add(circleBounce);

		// circleBounce_1
		const circleBounce_1 = new CircleBounce(this, 320, 384);
		circlesLayer.add(circleBounce_1);

		// circleNoBounce
		const circleNoBounce = new CircleNoBounce(this, 256, 224);
		circlesLayer.add(circleNoBounce);

		// padsLayer
		const padsLayer = this.add.layer();

		// jump_Pad
		const jump_Pad = new Jump_Pad(this, 960, 352);
		padsLayer.add(jump_Pad);

		// jump_Pad_1
		const jump_Pad_1 = new Jump_Pad(this, 896, 352);
		padsLayer.add(jump_Pad_1);

		// jump_Pad_2
		const jump_Pad_2 = new Jump_Pad(this, 800, 672);
		padsLayer.add(jump_Pad_2);

		// layer
		const layer = this.add.layer();

		// platformGrassSmall
		const platformGrassSmall = new PlatformGrassSmall(this, 896, 704);
		layer.add(platformGrassSmall);

		// player
		const player = new PlayerPrefab(this, 480, 64);
		this.add.existing(player);

		// levelEnd_P
		const levelEnd_P = new LevelEnd_P(this, 320, 224);
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
		const coin_P = new Coin_P(this, 416, 128);
		this.add.existing(coin_P);

		// lists
		const movableObjects = []
		const jumpPads = []
		const spikes = []

		// gameManager (components)
		new GameManager(gameManager);

		// levelCompletePanel_P.replayButton (components)
		const levelCompletePanel_P_replayButtonChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.replayButton);
		levelCompletePanel_P_replayButtonChangeLevelButton.levelName = "Level04";

		// levelCompletePanel_P.nextLevel (components)
		const levelCompletePanel_P_nextLevelChangeLevelButton = ChangeLevelButton.getComponent(levelCompletePanel_P.nextLevel);
		levelCompletePanel_P_nextLevelChangeLevelButton.levelName = "Level05";

		this.solid = solid;
		this.gameManager = gameManager;
		this.player = player;
		this.levelCompletePanel_P = levelCompletePanel_P;
		this.attemptsPanel_P = attemptsPanel_P;
		this.coin_P = coin_P;
		this.level04 = level04;
		this.movableObjects = movableObjects;
		this.jumpPads = jumpPads;
		this.spikes = spikes;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	solid;
	/** @type {Phaser.GameObjects.Rectangle} */
	gameManager;
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
		this.level04.setCollisionByProperty({collider :true});
		this.matter.world.convertTilemapLayer(this.solid);
	}

	/*nextLevel(){
		this.scene.start("Level01");
	}*/
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
