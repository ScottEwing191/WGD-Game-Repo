// You can write more code here

/* START OF COMPILED CODE */

class RectanglePhysics {

    constructor(gameObject) {
        this.gameObject = gameObject;
        gameObject["__RectanglePhysics"] = this;

        /* START-USER-CTR-CODE */
        this.scene = gameObject.scene;
        this.scene.events.once("scene-awake", this.awake, this);
        // first time the scene is updated, call the `start` method
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.rect = undefined;
        /* END-USER-CTR-CODE */
    }

    /** @returns {RectanglePhysics} */
    static getComponent(gameObject) {
        return gameObject["__RectanglePhysics"];
    }

    /** @type {Phaser.GameObjects.Image} */
    gameObject;
    /** @type {boolean} */
    isSensor = false;
    /** @type {number} */
    modifyBodyWidth = 0;
    /** @type {number} */
    modifyBodyHeight = 0;
    /** @type {number} */
    modifyYPosition = 0;
    /** @type {number} */
    spriteYOffset = 0;

    /* START-USER-CODE */

    awake() {
        // Doing this in awake cause the position of the gameobjects to chenge when the game starts
        //this.rect = this.scene.matter.add.gameObject(this.gameObject);
    }

    start() {
        this.rect = this.scene.matter.add.gameObject(this.gameObject);
        this.gameObject.setBody({
            x: this.gameObject.x,
            y: this.gameObject.y - this.modifyYPosition,       //display height = 64 | 64 - 56 = 8 | Shift the collider up by half of 8 (i.e 4) to get it on the grid
            width: this.gameObject.displayWidth + this.modifyBodyWidth,
            height: this.gameObject.displayHeight + this.modifyBodyHeight,
        }, {
            isStatic: true,
            ignoreGravity: true,
            isSensor : this.isSensor,
            render: {
                sprite: {
                    xOffset: 0,
                    //--4 / 64 = 0.0625     | 1 square paper cell is yOffset of 0.5 So shift the image up by 0.5 - 0.0625 = 0.4375
                    //-- Not totally sure why this works
                    yOffset: this.spriteYOffset
                }
            }
        })
    }
    /*start() {
        this.rect = this.scene.matter.add.gameObject(this.gameObject);
        this.gameObject.setBody({
            //x: this.gameObject.x,
            y: this.gameObject.y  - this.modifyYPosition,       //display height = 64 | 64 - 56 = 8 | Shift the collider up by half of 8 (i.e 4) to get it on the grid
            width: this.gameObject.displayWidth,
            height: this.gameObject.displayHeight,
        }, {
            isStatic: true,
            ignoreGravity: true,
            isSensor: this.isSensor,
            /!*render: {
                sprite: {
                    xOffset: 0,
                    //--4 / 64 = 0.0625     | 1 square paper cell is yOffset of 0.5 So shift the image up by 0.5 - 0.0625 = 0.4375
                    //-- Not totally sure why this works
                    yOffset: 0
                }
            }*!/
        })
    }*/

    update() {

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
