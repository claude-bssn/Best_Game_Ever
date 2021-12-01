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
    this.load.image('bottle', '../public/img/items/bottle.png');
    this.load.image('kerosen', '../public/img/items/kerosen.png');
    this.load.image('lighter', '../public/img/items/lighter.png');
    this.load.image('tissue', '../public/img/items/tissue.png');
}

function create ()
{
    // this.add.image(100,50,'bottle').setScale(0.2);
    bottle=this.physics.add.group({
        key: 'bottle',
        repeat: 5,
        setXY: { x: 100, y: 50, stepXY: 10}
    });

  bottle.children.iterate(function (child) {

      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

  });

//   kerosen = this.physics.add.group({
//       key: 'kerosen',
//       repeat: 1,
//       setXY: { x: 12, y: 0, stepX: 70 }
//   });

//   kerosen.children.iterate(function (child) {

//       child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//   });

//   lighter = this.physics.add.group({
//       key: 'lighter',
//       repeat: 1,
//       setXY: { x: 12, y: 0, stepX: 70 }
//   });

//   lighter.children.iterate(function (child) {
//       child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//   });

//   tissue = this.physics.add.group({
//       key: 'tissue',
//       repeat: 1,
//       setXY: { x: 12, y: 0, stepX: 70 }
//   });


//   tissue.children.iterate(function (child) {

//       child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

//   });



}

function update ()
{
}
