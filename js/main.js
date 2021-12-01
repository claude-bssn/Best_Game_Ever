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
const tileSize = 16;
const tileResize = 2
var numRows = 4;
var numCols = 5;

function preload ()
{
    this.load.spritesheet('assets', 'public/terrain/Assets.png', {
        frameWidth: tileSize,
        frameHeight: tileSize
    })
}

function create ()
{
    for (let i = 0; i * tileSize * tileResize < config.width; i++) {
        var sprite = this.add.image( i * tileSize * tileResize + tileSize * tileResize / 2, config.height-tileSize * tileResize/2, 'assets', 4).setScale(2);
    }
}

function update ()
{
    
}
