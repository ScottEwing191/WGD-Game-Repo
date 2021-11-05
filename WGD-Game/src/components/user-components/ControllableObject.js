// You can write more code here

/* START OF COMPILED CODE */

class ControllableObject {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ControllableObject"] = this;

		/* START-USER-CTR-CODE */
        this.scene = gameObject.scene;
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);        // set up start method. Done by UserComponent so not needed here
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);         // set up update method. Done by UserComponent so not needed here

        // Set up movement inputs Keyboard plugin
        this.input = this.scene.input.keyboard.addKeys({
                'up': Phaser.Input.Keyboard.KeyCodes.W,
                'down': Phaser.Input.Keyboard.KeyCodes.S,
                'left': Phaser.Input.Keyboard.KeyCodes.A,
                'right': Phaser.Input.Keyboard.KeyCodes.D,
                'rotateLeft': Phaser.Input.Keyboard.KeyCodes.Q,
                'rotateRight': Phaser.Input.Keyboard.KeyCodes.E
            }, false, false
        );

        //--set up variables
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
        //this.refToGameManager = GameManager.getComponent(this.scene.manager[0]);
        this.refToGameManager = GameManager.getComponent(this.scene.gameManager);
        this.yPositionOffset = RectanglePhysics.getComponent(this.gameObject).modifyYPosition;

        //-- Input Event Method
        //-- Add event listeners for each input.
        //--Up Event
        /*this.input.up.on('down', function (){
            this.gameObject.y -= this.moveDst;
        },this);*/

        //--Start Event Listener for mouse click
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

        //--Allow user to drag object
        this.gameObject.setInteractive({draggable: true});
        //this.scene.input.setDraggable(this.gameObject);
        //this.gameObject.input.draggable = true;

        this.gameObject.on('dragstart', function (pointer, dragX, dragY) {
            //console.debug('Drag Start');
        });

        this.gameObject.on('drag', (pointer, dragX, dragY) => {
            this.dragObject(dragX, dragY);
        });

        this.gameObject.on('dragend', function (pointer, dragX, dragY, dropped) {
            //console.debug('Drag End');
        });

    }

//=== END START



    update() {
        //this.gameObject.y = this.testInput(this.input.up.isDown, this.isUpOnce, this.gameObject.y, -1, this.moveDst);
        if (this.refToGameManager.currentMode === 'EDIT_MODE'){
            this.pollMovementInput();
        }
    }
    //--If the point the player clicked is inside the collision box of the object then mark the object as selected
    //--Multiple objects can be selected at once
    checkIfPointInBox(pX, pY) {
        let matterPhysics = new Phaser.Physics.Matter.MatterPhysics(this.scene);
        let bodiesArray = [this.gameObject.body];           // intersectPoint method requires an array so make one just containing one element
        let intersectingBodies = matterPhysics.intersectPoint(pX, pY, bodiesArray);
        if (intersectingBodies.length > 0) {
            this.isSelected = true;
        } else {
            this.isSelected = false;
        }
    }

    dragObject(dragX,dragY){
        // Move the game object with the mouse but snap it to the grid (each grid cell is 32x32 pixels)
        let gridX = Math.floor(dragX / 32);
        let gridY = Math.floor(dragY / 32);
        this.gameObject.x = gridX * 32;
        this.gameObject.y = gridY * 32;
        //this.gameObject.y -= this.yPositionOffset;  // this account for some objects colliders and sprite position being different from the default positions that
                                                    //... resulted from the sprite

        //--clamp the center of the game object to the bounds of the scene. Problem with only clamping the center is the sides of the object can go out of bounds
        let xMin = 32;
        let yMin = 32;
        let xMax = this.scene.cameras.main.width - 32;
        let yMax = this.scene.cameras.main.height - 32;
        this.gameObject.x = Math.min(Math.max(this.gameObject.x, xMin), xMax)
        this.gameObject.y = Math.min(Math.max(this.gameObject.y, yMin), yMax)
    }


    pollMovementInput(){
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
    }

    playModeEntered(){
        console.log('platform PLAY');
        //this.gameObject.disableInteractive();                 // works
        this.gameObject.input.draggable = false;                // also works
    }
    editModeEntered(){
        console.log('platform EDIT');
        //this.gameObject.setInteractive({draggable: true});    // works
        this.gameObject.input.draggable = true;                 // also works
    }

    //--Not Working direction is passed in by value so game object position does not get changed
    /*testInput(inputDown, isPressedOnce, direction, multiplier, translateBy) {
        console.log(isPressedOnce.valueOf());

        if (inputDown && this.isSelected && !isPressedOnce.once) {
            console.log('Selected');
            console.log('Inside Before: ' + direction);
            isPressedOnce.once = true;
            //isPressedOnce = new Boolean(true);
            direction += (multiplier * translateBy);
            console.log('Inside After: ' + direction);
        } else if (!inputDown)
            isPressedOnce.once = false;
            //isPressedOnce = new Boolean(false);
        return direction
    }*/

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

