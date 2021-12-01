import {CST} from "../CST.js"
export class LevelScene extends Phaser.Scene{
   constructor(){
       super({
           key: CST.SCENES.LEVEL
       })
   }
    init(data) {
        console.log(data)
    }
    create() {
       
    }
}