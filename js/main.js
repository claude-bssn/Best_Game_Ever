var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.spritesheet('scoreBoard', '../public/ath/scoreBoard.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('scoreBoard', '../public/ath/scoreBoard.png');
    this.load.image('emptyLife', '../public/ath/EmptyLifeBar.png');
    this.load.image('life', '../public/ath/Life.png');
    this.load.image('start', '../public/ath/start.png');
    this.load.image('pause', '../public/ath/pause.png');
    this.load.image('exit', '../public/ath/exit.png');
    this.load.image('itemBar', '../public/ath/itemBar.png');
    this.load.image('kerosen', '../public/ath/kerosen.png');
    this.load.image('lighter', '../public/ath/lighter.png');
    this.load.image('tissue', '../public/ath/tissue.png');
    this.load.image('bottle', '../public/ath/bottle.png');

}

function create ()
{
    this.add.image(100, 50, 'scoreBoard').setScale(0.45);
    this.add.image(370, 50, 'emptyLife').setScale(0.45);
    this.add.image(390, 50, 'life').setScale(0.45);
    //à acctiver quand on met le jeu en pause
    //this.add.image(680, 50, 'start').setScale(0.35);
    this.add.image(680, 50, 'pause').setScale(0.35);
    this.add.image(750, 50, 'exit').setScale(0.35);
    this.add.image(400, 550, 'itemBar').setScale(0.47);
    this.add.image(320, 550, 'lighter').setScale(0.06);
    this.add.image(370, 548, 'tissue').setScale(0.06);
    this.add.image(430, 550, 'bottle').setScale(0.06);
    this.add.image(480, 550, 'kerosen').setScale(0.06);
    

    
}

function update ()
{
}

