
// You can write more code here

/* START OF COMPILED CODE */

class GameManager {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__GameManager"] = this;

		/* START-USER-CTR-CODE */
		this.scene = this.gameObject.scene;
		//--Start
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		//--Update
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {GameManager} */
	static getComponent(gameObject) {
		return gameObject["__GameManager"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;

	/* START-USER-CODE */

	start(){

	}
	update(){

	}

	switchToPlayMode(){
		//--Turn off Draggable on movable objects
		//--Turn off WASD movement for movable objects
		//--Turn off static for ball
	}

	switchToEditMode(){
		//--Respawn Ball
		//--Respawn moving platforms
		//--Turn on Draggable on movable objects
		//--Turn on WASD movement for movable objects
		//--Turn on static for ball
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
