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
        let circleBody = this.scene.matter.add.gameObject(this.gameObject);
        circleBody.setBody({
            type: 'circle',
            radius: this.radius
        }, {
            mass: 25,
            inverseMass: (1 / 25)
        });
        circleBody.setBounce(this.bounce, this.bounce);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
