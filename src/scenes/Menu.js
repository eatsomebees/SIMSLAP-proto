class Menu extends Phaser.Scene {

    constructor() {
        super("menuScene")
    }

    preload() {
        // load audio
        this.load.audio('cymbal', './assets/cymbal.wav');
        this.load.audio('guncock', './assets/guncock.wav');
        this.load.audio('inception', './assets/inception.wav');
        this.load.audio('duck', './assets/rubberduck.wav');
        this.load.audio('select1', './assets/select1.wav');
        this.load.audio('select2', './assets/select2.wav');
        this.load.audio('slowclap', './assets/slowclap.wav');


    }

    create() {
        //menu display
        let menuConfig = {
            fontFamily: 'Roboto Condensed',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let spacerY = 45;

        //start button
        this.add.text(centerX, centerY-spacerY, ' Press \'Q\' to Start ', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, ' Press \'P\' for simp. mode ', menuConfig).setOrigin(0.5);

        //define keys
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyQ)) {
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyP)) {
            //simp mode
            game.settings = {
                firstTo: 1,
                maxSlaps: 1,
                maxBlocks:1,
            }
            this.scene.start("playScene");
        }

        //IMPLEMENT COMPLEXITTY CHANGE HERE (if we get that far)

    }
}