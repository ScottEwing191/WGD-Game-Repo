
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
		level_1.addTilesetImage("Pencil_64", "Pencil_64");
		level_1.addTilesetImage("PencilTileset_256", "Pencil_256");

		// tilesprite
		const tilesprite = this.add.tileSprite(0, 0, 960, 720, "Square Paper 2 Seamless_On Grid");
		tilesprite.setOrigin(0, 0);
		tilesprite.tileScaleX = 0.177;
		tilesprite.tileScaleY = 0.177;

		// pencil_ball_256
		const pencil_ball_256 = this.add.image(128, 96, "Pencil_ball_256");
		pencil_ball_256.scaleX = 0.25;
		pencil_ball_256.scaleY = 0.25;

		// pencil_grass_dirt_2
		const pencil_grass_dirt_2 = this.add.image(256, 224, "platform_pencil_grass_2");
		pencil_grass_dirt_2.scaleX = 0.25;
		pencil_grass_dirt_2.scaleY = 0.25;

		// ground
		const ground = level_1.createLayer("Ground", ["PencilTileset_256"], -64, -64);
		ground.scaleX = 0.25;
		ground.scaleY = 0.25;

		// border_1
		const border_1 = level_1.createLayer("Border", ["PencilTileset_256"], -64, -64);
		border_1.scaleX = 0.25;
		border_1.scaleY = 0.25;

		// pencil_grass_dirt_2_2
		const pencil_grass_dirt_2_2 = this.add.image(416, 224, "platform_pencil_grass_2");
		pencil_grass_dirt_2_2.scaleX = 0.25;
		pencil_grass_dirt_2_2.scaleY = 0.25;

		// pencil_grass_dirt_2_3
		const pencil_grass_dirt_2_3 = this.add.image(576, 224, "platform_pencil_grass_2");
		pencil_grass_dirt_2_3.scaleX = 0.25;
		pencil_grass_dirt_2_3.scaleY = 0.25;

		// lists
		const movableObjects = [pencil_grass_dirt_2, pencil_grass_dirt_2_2, pencil_grass_dirt_2_3]

		// pencil_ball_256 (components)
		const pencil_ball_256CirclePhysics = new CirclePhysics(pencil_ball_256);
		pencil_ball_256CirclePhysics.radius = 24;
		pencil_ball_256CirclePhysics.bounce = 0.5;
		new Respawn(pencil_ball_256);

		// pencil_grass_dirt_2 (components)
		new RectanglePhysics(pencil_grass_dirt_2);
		new ControllableObject(pencil_grass_dirt_2);

		// pencil_grass_dirt_2_2 (components)
		new RectanglePhysics(pencil_grass_dirt_2_2);
		new ControllableObject(pencil_grass_dirt_2_2);

		// pencil_grass_dirt_2_3 (components)
		new RectanglePhysics(pencil_grass_dirt_2_3);
		new ControllableObject(pencil_grass_dirt_2_3);

		this.level_1 = level_1;
		this.movableObjects = movableObjects;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image[]} */
	movableObjects;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.matter.world.setBounds(16,16, 848, 762, 64,true, true, true, false);
		console.log(this.movableObjects.length);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
