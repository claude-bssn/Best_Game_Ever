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
    this.load.image('scoreBoard', '../public/ath/scoreBoard.png');
    this.load.image('emptyLife', '../public/ath/EmptyLifeBar.png');
    this.load.image('life', '../public/ath/Life.png');
}

function create ()
{
    this.add.image(100, 50, 'scoreBoard');
    this.add.image(400, 50, 'emptyLife');
    this.add.image(435, 50, 'life');
}

function update ()
{
}