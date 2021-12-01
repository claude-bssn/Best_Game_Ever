import {CST} from "../CST.js"
export class LevelMenuScene extends Phaser.Scene{
   constructor(){
       super({
           key: CST.SCENES.LEVELMENU
       })
   }
    init(data) {
        console.log(data)
    }
    create() {
        this.add.image(0,0,"mainMenu_bg").setOrigin(0,0).setDepth(1).setScale(2);
        this.add.image(0,0,"mainBoard").setOrigin(-0.25,-0.25).setDepth(2).setScale(0.5);
        this.add.image(0,0,"lvlSelect").setOrigin(-0.37,-0.5).setDepth(2).setScale(1.5);
        this.add.image(0,0,"lvlSelectTxt").setOrigin(-2.1,-1.7).setDepth(2).setScale(0.5);
        let homeBtn = this.add.image(0,0,"home").setOrigin(-6.2,-6.7).setDepth(10).setScale(0.4);
        homeBtn.setInteractive();

        homeBtn.on("pointerover", ()=>{
            homeBtn = this.add.image(0,0,"home_hover").setOrigin(-6.2,-6.7).setDepth(10).setScale(0.4);
        })
        homeBtn.on("pointerdown", ()=>{
            homeBtn = this.add.image(0,0,"home_click").setOrigin(-6.2,-6.7).setDepth(10).setScale(0.4);
            this.scene.start(CST.SCENES.MAINMENU,"MainMenu")
        })
        homeBtn.on("pointerout", ()=>{
            homeBtn = this.add.image(0,0,"home").setOrigin(-6.2,-6.7).setDepth(10).setScale(0.4);
        })
        homeBtn.on("pointerup", ()=>{
            homeBtn = this.add.image(0,0,"home").setOrigin(-6.2,-6.7).setDepth(10).setScale(0.4);
        })


        let h=0
        let w=0;
        for (let index = 0; index < 12; index++) {
            if (index%4 == 0) {
                h+=1.5
                w=0
            }
            this.add.image(0,0,"lvl").setOrigin(-3.9-w*1.5,-0.7-h*0.8).setDepth(2).setScale(0.5);
            
            w++;
        }
        
    }
}