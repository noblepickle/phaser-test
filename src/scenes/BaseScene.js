import Phaser from 'phaser';

// BaseScene is a custom scene class that extends Phaser.Scene. It provides common functionality for all scenes in the game, such as handling cursor changes when hovering over interactive objects.
export default class BaseScene extends Phaser.Scene {
    updateCursor() {
        const pointer = this.input.activePointer; // Get the active pointer (mouse or touch)
        const hovering = this.input.hitTestPointer(pointer); // Check if the pointer is hovering over any interactive objects

        // If the pointer is hovering over any interactive objects, change the cursor to a pointer
        if (hovering.length > 0) {
            const top = hovering[hovering.length - 1];
            const hitbox = top.getData('hitbox');

            if (hitbox) {
                const local = top.getLocalPoint(pointer.x, pointer.y);

                if (local.x > hitbox.x1 && local.x < hitbox.x2 && local.y > hitbox.y1 && local.y < hitbox.y2) {
                    this.input.setDefaultCursor('grab');
                } else {
                    this.input.setDefaultCursor('pointer');
                }
            } else {
                this.input.setDefaultCursor('pointer');
            }
        } else {
            this.input.setDefaultCursor('default');
        }
    }

    update() {
        this.updateCursor();
    }
}