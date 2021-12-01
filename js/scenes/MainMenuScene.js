import {CST} from "../CST.js"
export class MainMenuScene extends Phaser.Scene{
   constructor(){
       super({
           key: CST.SCENES.MAINMENU
       })
   }
    init(data) {
        console.log(data)
    }
    create() {
        this.add.image(0,0,"mainMenu_bg").setOrigin(0,0).setDepth(1).setScale(2);
        this.add.image(0,0,"mainBoard").setOrigin(-0.25,-0.25).setDepth(2).setScale(0.5);
        this.add.image(0,0,"gameTitle").setOrigin(-0.3,-0.3).setDepth(2);
        let playbutton = this.add.image(0,0,"playBtn").setOrigin(-2,-4).setDepth(3).setScale(0.5);
        playbutton.setInteractive();
        playbutton.on("pointerover", ()=>{
            playbutton = this.add.image(0,0,"playBtn_hover").setOrigin(-2,-4).setDepth(3).setScale(0.5);
        })
        playbutton.on("pointerdown", ()=>{
            playbutton = this.add.image(0,0,"playBtn_click").setOrigin(-2,-4).setDepth(3).setScale(0.5);
            this.scene.start(CST.SCENES.LEVELMENU,"lvlMenu")
        })
        playbutton.on("pointerout", ()=>{
            playbutton = this.add.image(0,0,"playBtn").setOrigin(-2,-4).setDepth(3).setScale(0.5);
        })
        playbutton.on("pointerup", ()=>{
            playbutton = this.add.image(0,0,"playBtn").setOrigin(-2,-4).setDepth(3).setScale(0.5);
        })
    }
}