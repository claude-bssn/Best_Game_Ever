
import { MainMenuScene } from "./scenes/MainMenuScene.js";
import { LoadingScene } from "./scenes/LoadingScene.js";
import { LevelMenuScene } from "./scenes/LevelMenuScene.js";
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        LoadingScene,
        MainMenuScene,
        LevelMenuScene
    ]
};
new Phaser.Game(config);

