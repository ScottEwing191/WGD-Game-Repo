
// You can write more code here

/* START OF COMPILED CODE */

class AntiGravZone extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__AntiGravZone"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {AntiGravZone} */
	static getComponent(gameObject) {
		return gameObject["__AntiGravZone"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	start(){
		this.playerAirFriction = this.scene.player.frictionAir;
		//--Start checking collision start events for if this Anti-Grav zone is touching the player
		this.scene.matter.world.on('collisionstart', function(event, bodyA, bodyB){
			if ((bodyA.gameObject === this.gameObject && bodyB.gameObject === this.scene.player) ||
				bodyA.gameObject === this.scene.player && bodyB.gameObject === this.gameObject){
				this.scene.player.setIgnoreGravity(true);
				//this.scene.player.setFrictionAir(0);
			}
		},this);

		//--Start checking collision end events for if this Anti-Grav zone is no longer touching the player
		this.scene.matter.world.on('collisionend', function(event, bodyA, bodyB){
			if (bodyA.gameObject === this.gameObject && bodyB.gameObject === this.scene.player ||
				bodyA.gameObject === this.scene.player && bodyB.gameObject === this.gameObject){
				this.scene.player.setIgnoreGravity(false);
				//this.scene.player.setFrictionAir(this.playerAirFriction);
			}
		},this);


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
