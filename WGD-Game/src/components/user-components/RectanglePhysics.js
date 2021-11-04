// You can write more code here

/* START OF COMPILED CODE */

class RectanglePhysics {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__RectanglePhysics"] = this;

		/* START-USER-CTR-CODE */
        this.scene = gameObject.scene;
        // first time the scene is updated, call the `start` method
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.rect = undefined;
        /* END-USER-CTR-CODE */
	}

	/** @returns {RectanglePhysics} */
	static getComponent(gameObject) {
		return gameObject["__RectanglePhysics"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

    start() {
        this.rect = this.scene.matter.add.gameObject(this.gameObject);
        this.rect.setBody({
            x: this.gameObject.x,
            y: this.gameObject.y,
            width: this.gameObject.displayWidth,
            height: this.gameObject.displayHeight,
        })
        //rect.setDensity(10000);
        //this.rect.setFrictionAir(1);
        this.rect.setIgnoreGravity(true);
        this.rect.setStatic(true);

    }

    update() {

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
