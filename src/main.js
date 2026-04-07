import Phaser from 'phaser';
import TestScene from './scenes/TestScene.js';

const config = {
    type: Phaser.AUTO, //Phaser will choose WebGL if available, otherwise it will fall back to Canvas
    width: 1280,
    height: 720,
    parent: 'game',
    scene: [TestScene],
};

const game = new Phaser.Game(config);
