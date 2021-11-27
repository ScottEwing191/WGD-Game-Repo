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
            'newScene': Phaser.Input.Keyboard.KeyCodes.ENTER
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

    start() {
        this.modeInput.enterEdit.on('down', () => {
            this.switchToEditMode();
        });
        this.modeInput.enterPlay.on('down', () => {
            this.switchToPlayMode();
        });
        this.modeInput.newScene.on('down', () => {
            this.newScene();
        });
        this.resets = 0;
        this.levelFinished = false;
    }

    update() {

    }

    switchToPlayMode() {
        //--Check if already in PLAY MODE and if not set current mode
        if (this.currentMode == 'PLAY_MODE' || this.levelFinished)
            return;
        this.currentMode = 'PLAY_MODE';

        //--Tell all ControllableObjects to go into PLAY MODE
        for (let i = 0; i < this.scene.movableObjects.length; i++) {
            ControllableObject.getComponent(this.scene.movableObjects[i]).playModeEntered();
        }
        //--Tell Player to go into PLAY MODE
        Player.getComponent(this.scene.player).playModeEntered();

        //--Turn on collision jump-pad Player collision event on each jump pad
        for (let i = 0; i < this.scene.jumpPads.length; i++) {
            JumpPad.getComponent(this.scene.jumpPads[i]).playModeEntered();
        }

        //--Turn On Spike-Player Collision
        for (let i = 0; i < this.scene.spikes.length; i++) {
            Spike.getComponent(this.scene.spikes[i]).playModeEntered();
        }


    }

    switchToEditMode() {
        //--Check if already in EDIT MODE and if not set current mode
        if (this.currentMode == 'EDIT_MODE' || this.levelFinished)
            return;
        this.currentMode = 'EDIT_MODE';
        //--Increase the resets counter and set the resets text
        this.resets++;
        this.tryResetsText();

        //--Tell all ControllableObjects to go into EDIT MODE
        for (let i = 0; i < this.scene.movableObjects.length; i++) {
            ControllableObject.getComponent(this.scene.movableObjects[i]).editModeEntered();
        }

        //--Tell player to go into EDIT MODE
        let player = Player.getComponent(this.scene.player);
        Player.getComponent(this.scene.player).editModeEntered();
        if (player.gameObject.getCenter().x !== player.startPosition.x) {
            console.log("Went Wrong");
            this.scene.resetPlayer();
        }

        //--Get coin to reset if it has been collected
        if (this.scene.coin_P != null){
            CoinCollectable.getComponent(this.scene.coin_P).editModeEntered();
        }
    }

    levelFailed() {
        //ResetPlayer
        this.switchToEditMode();
    }

    levelWon(){
        this.levelFinished = true;
        this.scene.time.addEvent({
            delay: 1000,
            callback: ()=>{
                this.scene.levelCompletePanel_P.setVisible(true);         // display level complete screen
            }
        })
    }

    tryResetsText(){
        if (this.scene.attemptsPanel_P.resetsText != null){
            this.scene.attemptsPanel_P.resetsText.text = "Resets: " + this.resets;
        }
        if (this.scene.levelCompletePanel_P.resetsText_1 != null){
            this.scene.levelCompletePanel_P.resetsText_1.text = "Resets: " + this.resets;
        }
    }

    newScene() {
        this.scene.nextLevel();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
