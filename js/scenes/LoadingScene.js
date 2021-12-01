import {CST} from "../CST.js"
export class LoadingScene extends Phaser.Scene{
   constructor(){
       super({
           key: CST.SCENES.LOADING
       })
   }
    preload ()
   {
       // Menu
       this.load.image("mainMenu_bg","public/assets/gui/mainMenu_background.jpeg");
       this.load.image("gameTitle","public/assets/gui/title/gameTitle.png");
       this.load.image("mainBoard","public/assets/gui/board/mainBoard.png");
       this.load.image("lvlSelect","public/assets/gui/board/lvlSelect.svg");
       this.load.image("lvl","public/assets/gui/board/lvl.svg");
       this.load.image("home","public/assets/gui/btn/home.svg");
       this.load.image("home_hover","public/assets/gui/btn/home_hover.svg");
       this.load.image("home_click","public/assets/gui/btn/home_click.svg");
       this.load.image("lvlSelectTxt","public/assets/gui/board/lvlSelectTxt.svg");
       this.load.image("playBtn","public/assets/gui/btn/playBtn.png");
       this.load.image("playBtn_hover","public/assets/gui/btn/playBtn_hover.png");
       this.load.image("playBtn_click","public/assets/gui/btn/playBtn_click.png");
       // GAME


       // FINISH
       this.load.on("complete", ()=>{
           // console.log("done");
       })
   }
   create(){
        // this.add.image(0,0,"mainMenu_bg");
       this.scene.start(CST.SCENES.MAINMENU,"done")
   }
}