// You can write more code here

/* START OF COMPILED CODE */

class CirclePhysics {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__CirclePhysics"] = this;

		/* START-USER-CTR-CODE */
        this.scene = gameObject.scene;

        // first time the scene is updated, call the `start` method
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		//-- JUST FOR TESTING  - TAKE OUT WHENEVER
		/*gameObject.scene.events.once("scene-awake", () => {
			//this.scene.matter.add.gameObject(this.gameObject);
			console.log("Awake: " +this.gameObject.y);

		});*/

        /* END-USER-CTR-CODE */
	}

	/** @returns {CirclePhysics} */
	static getComponent(gameObject) {
		return gameObject["__CirclePhysics"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	radius = 32;
	/** @type {number} */
	bounce = 0.8;

	/* START-USER-CODE */

    start() {
        this.scene.matter.add.gameObject(this.gameObject);
		this.gameObject.setBody({
			x: this.gameObject.x,
			y: this.gameObject.y,
			type: 'circle',
            radius: this.radius
        }, {
            mass: 25,
            inverseMass: (1 / 25)
        });
		this.gameObject.setBounce(this.bounce, this.bounce);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
