export default class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOver' })
    }

    create() {
        this.add.image(400, 280, "game-over")
            .setInteractive()
            .on('pointerdown', () => this.scene.start('game'));
    }
}