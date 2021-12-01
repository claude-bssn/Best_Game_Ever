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
    this.load.image('bottle', 'public/img/items/bottle.png');
    this.load.image('kerosen', 'public/img/items/kerosen.png');
    this.load.image('lighter', 'public/img/items/lighter.png');
    this.load.image('tissue', 'public/img/items/tissue.png');
}

function create ()
{
}

function update ()
{
}

stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: { x: 12, y: 0, stepX: 70 }
});

stars.children.iterate(function (child) {

    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

});
