
// You can write more code here

/* START OF COMPILED CODE */

class MenuPlayButton extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__MenuPlayButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {MenuPlayButton} */
	static getComponent(gameObject) {
		return gameObject["__MenuPlayButton"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	start(){
		Player.getComponent(this.scene.player).playModeEntered();
		//--Turn on collision jump-pad Player collision event on each jump pad
		for (let i = 0; i < this.scene.jumpPads.length; i++) {
			JumpPad.getComponent(this.scene.jumpPads[i]).playModeEntered();
		}

		this.gameObject.setInteractive({draggable: true});
		this.gameObject.on('dragstart', function (pointer, dragX, dragY) {
			//console.debug('Drag Start');
			this.gameObject.play('button-selected');
		}, this);

		this.gameObject.on('dragend', function (pointer, dragX, dragY, dropped) {
			//console.debug('Drag End');
			this.scene.nextLevel("Level01");
			//this.isSelected = false;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
