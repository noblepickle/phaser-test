import Phaser from 'phaser';

export default class Yuu extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'yuu'); // Call the parent constructor with the scene, x and y coordinates, and the key for the sprite image

        scene.add.existing(this); // Add the sprite to the scene

        this.setScale(0.15);
        this.setInteractive();

        this.setData('hitbox', { x1: 212, y1: 39, x2: 572, y2: 369 });

        this.on('pointerdown', (pointer, localX, localY) => {

            if (localX > 212 && localX < 572 && localY > 39 && localY < 369) {
                console.log('+1 Headpat!');
            } else {
                console.log('no headpat :(');
            }

        });

        this.on('pointerover', () => {
            // Set and Get data properties are a way to store custom data on game objects.
            this.setData('hovering', true); // Set a custom data property 'hovering' to true when the pointer is over the sprite

            scene.tweens.add({
                targets: this,
                scaleX: 0.20,
                scaleY: 0.20,
                duration: 200,
                ease: 'power2',
            });
        });

        this.on('pointerout', () => {
            this.setData('hovering', false); // Set the 'hovering' data property to false when the pointer is no longer hovering over the sprite

            scene.tweens.add({
                targets: this,
                scaleX: 0.15,
                scaleY: 0.15,
                duration: 200,
                ease: 'power2',
            });
        });
    }
}

/*

this.time.delayedCall(100, () => {
    if (yuu.getData('hovering')) {
        text.setText('Yuu ❤️');
    }
});

*/