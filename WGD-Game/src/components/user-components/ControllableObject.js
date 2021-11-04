// You can write more code here

/* START OF COMPILED CODE */

class ControllableObject {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ControllableObject"] = this;

		/* START-USER-CTR-CODE */
        this.scene = gameObject.scene;
        // first time the scene is updated, call the `start` method
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        this.cursors = this.scene.input.keyboard.createCursorKeys();


        this.input = this.scene.input.keyboard.addKeys({
                'up': Phaser.Input.Keyboard.KeyCodes.W,
                'down': Phaser.Input.Keyboard.KeyCodes.S,
                'left': Phaser.Input.Keyboard.KeyCodes.A,
                'right': Phaser.Input.Keyboard.KeyCodes.D,
                'rotateLeft': Phaser.Input.Keyboard.KeyCodes.Q,
                'rotateRight': Phaser.Input.Keyboard.KeyCodes.E
            }, false, false
        );

        //this.upDownOnce = false;
        this.isSelected = false;
        /* END-USER-CTR-CODE */
	}

	/** @returns {ControllableObject} */
	static getComponent(gameObject) {
		return gameObject["__ControllableObject"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	moveDst = 32;
	/** @type {number} */
	rotateDegrees = 15;

	/* START-USER-CODE */

    start() {
        //-- Input Event Method
        //-- Add event listeners for each input.
        //-- Not sure how to disable once started
        //--Up Event
        /*this.input.up.on('down', function (){
            this.gameObject.y -= this.moveDst;
        },this);
        //--Down Event
        this.input.down.on('down', function (){
            this.gameObject.y += this.moveDst;
        },this);
        //--Left Event
        this.input.left.on('down', function (){
            this.gameObject.x -= this.moveDst;
        },this);
        //--Right Event
        this.input.right.on('down', function (){
            this.gameObject.x += this.moveDst;
        },this);
        //--Rotate Left Event
        this.input.rotateLeft.on('down', function (){
            this.gameObject.angle -= this.rotateDegrees;
            //this.gameObject.angle -= 5
        },this);
        //--Rotate Right Event
        this.input.rotateRight.on('down', function (){
            this.gameObject.angle += this.rotateDegrees;
            //this.gameObject.angle += 5;
        },this);*/

        this.scene.input.on('pointerdown', (event) => {
            this.checkIfPointInBox(event.x, event.y);
        });
        //--Setup variable to make sure objects is only moved the frame the key was clicked
        //this.isUpOnce = new Boolean(false);
        this.isUpOnce = false;
        this.isDownOnce = false;
        this.isLeftOnce = false;
        this.isRightOnce = false;
        this.isRotateLeftOnce = false;
        this.isRotateRightOnce = false;

        this.gameObject.setInteractive({draggable: true});
        //this.scene.input.setDraggable(this.gameObject);
        //this.gameObject.input.draggable = true;

        this.gameObject.on('dragstart', function (pointer, dragX, dragY) {
            //console.debug('Drag Start');
        });
        this.gameObject.on('drag', function (pointer, dragX, dragY) {
            // Move the game object with the mouse but snap it to the grid (each grid cell is 32x32 pixels)
            let gridX = Math.floor(dragX / 32);
            let gridY = Math.floor(dragY / 32);
            this.gameObject.x = gridX * 32;
            this.gameObject.y = gridY * 32;
        }, this);
        this.gameObject.on('dragend', function (pointer, dragX, dragY, dropped) {
            //console.debug('Drag End');
        });

    }

//=== END START

    checkIfPointInBox(pX, pY) {
        //let body = this.gameObject.body;
        let matterPhysics = new Phaser.Physics.Matter.MatterPhysics(this.scene);
        let bodiesArray = [this.gameObject.body];
        let intersectingBodies = matterPhysics.intersectPoint(pX, pY, bodiesArray);
        if (intersectingBodies.length > 0) {
            //this.enableEvents();
            this.isSelected = true;
        } else {
            //this.disableEvents();
            this.isSelected = false;
        }
    }

    disableEvents() {
        this.input.up.enabled = false;
        this.input.down.enabled = false;
        this.input.left.enabled = false;
        this.input.right.enabled = false;
        this.input.rotateLeft.enabled = false;
        this.input.rotateRight.enabled = false;
    }

    enableEvents() {
        this.input.up.enabled = true;
        this.input.down.enabled = true;
        this.input.left.enabled = true;
        this.input.right.enabled = true;
        this.input.rotateLeft.enabled = true;
        this.input.rotateRight.enabled = true;
    }

    update(time) {
        //this.gameObject.y = this.testInput(this.input.up.isDown, this.isUpOnce, this.gameObject.y, -1, this.moveDst);

        //--UP
        if (this.input.up.isDown && this.isSelected && !this.isUpOnce) {
            this.isUpOnce = true
            this.gameObject.y -= this.moveDst
        } else if (!this.input.up.isDown)
            this.isUpOnce = false;

        //--DOWN
        if (this.input.down.isDown && this.isSelected && !this.isDownOnce) {
            this.isDownOnce = true
            this.gameObject.y += this.moveDst;
        } else if (!this.input.down.isDown)
            this.isDownOnce = false;

        //--LEFT
        if (this.input.left.isDown && this.isSelected && !this.isLeftOnce) {
            this.isLeftOnce = true
            this.gameObject.x -= this.moveDst;
        } else if (!this.input.left.isDown)
            this.isLeftOnce = false;

        //--RIGHT
        if (this.input.right.isDown && this.isSelected && !this.isRightOnce) {
            this.isRightOnce = true
            this.gameObject.x += this.moveDst;
        } else if (!this.input.right.isDown)
            this.isRightOnce = false;

        //--ROTATE LEFT
        if (this.input.rotateLeft.isDown && this.isSelected && !this.isRotateLeftOnce) {
            this.isRotateLeftOnce = true
            this.gameObject.angle -= this.rotateDegrees;
        } else if (!this.input.rotateLeft.isDown)
            this.isRotateLeftOnce = false;

        //--ROTATE RIGHT
        if (this.input.rotateRight.isDown && this.isSelected && !this.isRotateRightOnce) {
            this.isRotateRightOnce = true
            this.gameObject.angle += this.rotateDegrees;
        } else if (!this.input.rotateRight.isDown)
            this.isRotateRightOnce = false;

		if(this.cursors.space.isDown){
            RectanglePhysics.getComponent(this.gameObject).rect.setStatic(true);
        }
    }

    //--Not Working direction is passed in by value so game object position does not get changed
    testInput(inputDown, isPressedOnce, direction, multiplier, translateBy) {
        console.log(isPressedOnce.valueOf());

        if (inputDown && this.isSelected && !isPressedOnce.valueOf()) {
            console.log('Selected');
            console.log('Inside Before: ' + direction);
            isPressedOnce = true;
            //isPressedOnce = new Boolean(true);
            direction += (multiplier * translateBy);
            console.log('Inside After: ' + direction);
        } else if (!inputDown)
            isPressedOnce = false;
            //isPressedOnce = new Boolean(false);

        return direction
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

