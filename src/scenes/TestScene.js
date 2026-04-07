import Phaser from "phaser";
import BaseScene from "./BaseScene";

export default class TestScene extends BaseScene {
    constructor() {
        super('TestScene');
    }

    preload() {
        // Preload is for loading assets like images, audio, etc.

    }

    create() {
        // Create is for setting up the scene, adding sprites, text, etc.

        this.cameras.main.setBackgroundColor('#6495ED'); //Cornflower Blue

        // Add a text object to the center of the screen
        const text = this.add.text(640, 360, 'Hello, World!', {
            fontFamily: 'monospace',
            fontSize: '48px',
            color: '#ffffff',
        }).setOrigin(0.5); // Set the origin to the center of the text for proper centering

        // Make the text interactive and change its content when clicked
        text.setInteractive();
        text.on('pointerdown', () => {
            text.setText('Hello, World?');
        });
    }

    update() {
        // The update method is called once per game frame and is used for handling real-time updates, such as player movement, animations, etc.
        // Call the base class update method to handle cursor changes
        super.update();
    }

}