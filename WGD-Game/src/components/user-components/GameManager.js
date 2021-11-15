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
		//--Check if already in PLAY MODE and if not set current mode
		if(this.currentMode === 'PLAY_MODE')
			return;
		this.currentMode = 'PLAY_MODE';

		//--Tell all ControllableObjects to go into PLAY MODE
		for(let i = 0 ; i< this.scene.movableObjects.length; i++){
			ControllableObject.getComponent(this.scene.movableObjects[i]).playModeEntered();
		}
		//--Turn off static for ball
		 Player.getComponent(this.scene.player).playModeEntered();

		//--Turn on collision jump-pad Player collision event on each jump pad
		for(let i = 0 ; i< this.scene.jumpPads.length; i++){
			JumpPad.getComponent(this.scene.jumpPads[i]).playModeEntered();
		}

		//--Turn On Spike-Player Collision
		for(let i = 0 ; i < this.scene.spikes.length; i++){
			Spike.getComponent(this.scene.spikes[i]).playModeEntered();
		}
	}

	switchToEditMode(){
		//--Check if already in EDIT MODE and if not set current mode
		if(this.currentMode === 'EDIT_MODE')
			return;
		this.currentMode = 'EDIT_MODE';

		//--Tell all ControllableObjects to go into EDIT MODE
		for(let i = 0 ; i< this.scene.movableObjects.length; i++){
			ControllableObject.getComponent(this.scene.movableObjects[i]).editModeEntered();
		}

		//--Tell player to go into EDIT MODE
		Player.getComponent(this.scene.player).editModeEntered();
	}

	levelFailed(){
	console.log("Level Failed");
	//Score
	//ResetPlayer
	this.switchToEditMode();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
