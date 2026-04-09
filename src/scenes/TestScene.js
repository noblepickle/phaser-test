import Phaser from "phaser";
import BaseScene from "./BaseScene";

export default class TestScene extends BaseScene {
    constructor() {
        super('TestScene');
    }

    preload() {
        // Preload is for loading assets like images, audio, etc.
        this.load.image('yuu', '/assets/sprites/yuu.png');
    }

    create() {
        // Create is for setting up the scene, adding sprites, text, etc.

        this.cameras.main.setBackgroundColor('#6495ED'); //Cornflower Blue

        // Add a text object to the center of the screen
        const text = this.add.text(640, 360, 'Hello, World!', {
            fontFamily: 'sans-serif',
            fontSize: '48px',
            color: '#ffffff',
        }).setOrigin(0.5); // Set the origin to the center of the text for proper centering

        // Make the text interactive so it can respond to pointer events
        text.setInteractive();
        let textStr = 'Hello, World!';

        // Add a pointerdown event listener to the text object.
        text.on('pointerdown', () => {
            if (text.text === 'Hello, World!') {
                text.setText('Hello, World?');
                textStr = 'Hello, World?';
            } else {
                text.setText('Hello, World!');
                textStr = 'Hello, World!';
            }
        });

        // Add pointerover and pointerout event listeners.
        text.on('pointerover', () => {
            // A tween is an animation that changes the properties of an object over time.
            // In this case, we are creating a tween that scales the text up to 1.1 times its original size when the pointer is over it.
            this.tweens.add({
                targets: text,
                scaleX: 1.1,
                scaleY: 1.1,
                duration: 200,
                ease: 'Power2',
            })
        });

        // Add a pointerout event listener.
        text.on('pointerout', () => {
            // This tween scales the text back down to its original size when the pointer is no longer hovering over it.
            this.tweens.add({
                targets: text,
                scaleX: 1,
                scaleY: 1,
                duration: 200,
                ease: 'Power2',
            })
        });

        // Add an image of Yuu to the scene below the text.
        const yuu = this.add.image(640, 500, 'yuu').setScale(0.15).setInteractive();

        yuu.on('pointerdown', () => {
            console.log('clicked yuu!');
        })

        yuu.on('pointerover', () => {
            text.setText('Yuu ❤️');

            this.tweens.add({
                targets: yuu,
                scaleX: 0.20,
                scaleY: 0.20,
                duration: 200,
                ease: 'Power2',
            });
        });

        yuu.on('pointerout', () => {
            text.setText(textStr);

            this.tweens.add({
                targets: yuu,
                scaleX: 0.15,
                scaleY: 0.15,
                duration: 200,
                ease: 'Power2',
            });
        });
    }

    update() {
        // The update method is called once per game frame and is used for handling real-time updates, such as player movement, animations, etc.
        // Call the base class update method to handle cursor changes
        super.updateCursor();
    }

}