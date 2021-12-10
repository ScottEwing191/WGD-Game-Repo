
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// guapen
		const guapen = this.add.image(400, 219, "guapen");
		guapen.scaleX = 0.5915891440784282;
		guapen.scaleY = 0.5915891440784282;
		guapen.visible = false;

		// progress
		const progress = this.add.text(512, 550, "", {});
		progress.scaleX = 2;
		progress.scaleY = 2;
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({"fontSize":"30px"});

		// game_Logo
		this.add.image(512, 416, "Game Logo");

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level1"));
		//this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level04"));
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("MainMenu"));

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
