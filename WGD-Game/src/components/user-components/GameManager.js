// You can write more code here

/* START OF COMPILED CODE */

class GameManager {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__GameManager"] = this;

		/* START-USER-CTR-CODE */
		this.scene = gameObject.scene;
		//--Start
		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		//--Update
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		this.modeInput = this.scene.input.keyboard.addKeys({
			'enterPlay': Phaser.Input.Keyboard.KeyCodes.SPACE,
			'enterEdit': Phaser.Input.Keyboard.KeyCodes.R,
		});

		this.currentMode = 'EDIT_MODE';
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
		this.modeInput.enterEdit.on('down',() => {
			this.switchToEditMode();
		});
		this.modeInput.enterPlay.on('down',() => {
			this.switchToPlayMode();
		});
	}
	update(){

	}

	switchToPlayMode(){
		if(this.currentMode === 'PLAY_MODE')
			return;
		this.currentMode = 'PLAY_MODE';
		//--Turn off Draggable on movable objects
		for(let i = 0 ; i< this.scene.movableObjects.length; i++){
			ControllableObject.getComponent(this.scene.movableObjects[i]).playModeEntered();
		}
		//--Turn off WASD movement for movable objects
		//--Turn off static for ball
		Player.getComponent(this.scene.player).playModeEntered();
	}

	switchToEditMode(){
		if(this.currentMode === 'EDIT_MODE')
			return;
		this.currentMode = 'EDIT_MODE';
		for(let i = 0 ; i< this.scene.movableObjects.length; i++){
			ControllableObject.getComponent(this.scene.movableObjects[i]).editModeEntered();
		}
		console.debug('SWITCH TO EDIT');

		//--Respawn Ball
		//--Respawn moving platforms
		//--Turn on Draggable on movable objects
		//--Turn on WASD movement for movable objects
		//--Turn on static for ball
		Player.getComponent(this.scene.player).editModeEntered();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
