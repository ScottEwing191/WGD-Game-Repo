
// You can write more code here

/* START OF COMPILED CODE */

class Respawn {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Respawn"] = this;

		/* START-USER-CTR-CODE */
		this.scene = gameObject.scene;
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Respawn} */
	static getComponent(gameObject) {
		return gameObject["__Respawn"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	update(){

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
