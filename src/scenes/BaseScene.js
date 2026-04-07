import Phaser from 'phaser';

// BaseScene is a custom scene class that extends Phaser.Scene. It provides common functionality for all scenes in the game, such as handling cursor changes when hovering over interactive objects.
export default class BaseScene extends Phaser.Scene {
    update() {
        const pointer = this.input.activePointer; // Get the active pointer (mouse or touch)
        const hovering = this.input.hitTestPointer(pointer); // Check if the pointer is hovering over any interactive objects

        // If the pointer is hovering over any interactive objects, change the cursor to a pointer
        if (hovering.length > 0) {
            this.input.setDefaultCursor('pointer');
        } else {
            this.input.setDefaultCursor('default');
        }
    }
}