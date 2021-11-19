window.addEventListener('load', function () {

    var game = new Phaser.Game({
        //width: 896,
        //height: 704,
        width: 1024,
        height: 832,
        type: Phaser.AUTO,
        backgroundColor: "#242424",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },

        physics: {
             default: 'matter',
            arcade: {
                debug: true,
                gravity: {
                    y: 200
                }
            },
            matter: {
                debug: true,
                gravity: {y: 0.5}
            }
        },

    });

    game.scene.add("Preload", Preload);
    game.scene.add("Level01", Level01);
    game.scene.add("Level", Level);
    game.scene.add("Level1", Level1);
    game.scene.add("LevelTest", LevelTest);
    game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");

        this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
    }
}