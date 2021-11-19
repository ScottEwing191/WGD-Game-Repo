
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
	/** @type {number} */
	zoneAirFriction = 0;

	/* START-USER-CODE */

	start(){
		//--Start checking collision start events for if this Anti-Grav zone is touching the player
		this.scene.matter.world.on('collisionstart', function(event, bodyA, bodyB){
			if ((bodyA.gameObject === this.gameObject && bodyB.gameObject === this.scene.player) ||
				bodyA.gameObject === this.scene.player && bodyB.gameObject === this.gameObject){
				console.log('Enter Grav')
				this.enterGravZone();
			}
		},this);

		//--Start checking collision end events for if this Anti-Grav zone is no longer touching the player
		this.scene.matter.world.on('collisionend', function(event, bodyA, bodyB){
			if (bodyA.gameObject === this.gameObject && bodyB.gameObject === this.scene.player ||
				bodyA.gameObject === this.scene.player && bodyB.gameObject === this.gameObject){
				console.log('Leave Grav')
				this.leaveGravZone();
			}
		},this);


	}
	//--Controls the player behaviour when they enter an anti gravity zone
	enterGravZone() {
		const playerScript =  Player.getComponent(this.scene.player);
		//--If there are multiple anti gravity zones beside each other it is possible for the ball to enter one zone while...
		//--it is still in another. In this case the ball doesnt need to set the setIgnoreGravity and setFrictionAir again.
		//--gravZoneCount is used to keep track of whether the player is still in a ant gravity zone or not.
		console.log('Enter: '+playerScript.gravZoneCount);
		if (playerScript.gravZoneCount == 0) {
			playerScript.gameObject.setIgnoreGravity(true);
			playerScript.gameObject.setFrictionAir(this.zoneAirFriction);
		}
		playerScript.gravZoneCount++;
	}

	//--Controls the player behaviour when they leave an anti gravity zone
	leaveGravZone() {
		const playerScript =  Player.getComponent(this.scene.player);
		//--The setIgnoreGravity and setFrictionAir only need to be set if the ball is leaving this anti gravity zone and is also NOT still in another anti gravity zone
		console.log('Leave: '+playerScript.gravZoneCount);

		playerScript.gravZoneCount--;
		if (playerScript.gravZoneCount == 0) {
			playerScript.gameObject.setIgnoreGravity(false);
			playerScript.gameObject.setFrictionAir(0.01);
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
