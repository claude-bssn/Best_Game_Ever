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
var score = 0;

var bottle;
var scoreText;
var bombs;

function create () {

  this.add.image('kerosen', '../public/img/items/kerosen.png');
  this.add.image('bottle', '../public/img/items/bottle.png');
  this.add.image('lighter', '../public/img/items/lighter.png');
  this.add.image('tissue', '../public/img/items/tissue.png');
   kerosen = this.physics.add.group({
        key: "kerosen", 
        repeat: 11, 
        setXY: { x: 12, y: 0, stepX: 70 } 
    });

    kerosen.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
    });


     bottle = this.physics.add.group({
          key: "bottle", 
          repeat: 11, 
          setXY: { x: 12, y: 0, stepX: 70 } 
      });

      bottle.children.iterate(function (child) {

          child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
      });

      tissue = this.physics.add.group({
           key: "tissue", 
           repeat: 11, 
           setXY: { x: 12, y: 0, stepX: 70 } 
       });

       tissue.children.iterate(function (child) {

           child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
       });

       lighter = this.physics.add.group({
            key: "lighter", 
            repeat: 11, 
            setXY: { x: 12, y: 0, stepX: 70 } 
        });

        lighter.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
        });

    this.physics.add.collider(bottle, platforms);
    this.physics.add.collider(kerosen, platforms);
    this.physics.add.collider(tissue, platforms);
    this.physics.add.collider(lighter, platforms);


    this.physics.add.overlap(player, bottle, collectbottle, null, this);


    scoreText = this.add.text(16, 16, "Score: 0", {fontSize: "32px", fill: "#000"});

    cursors = this.input.keyboard.createCursorKeys();
}

function update () {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play("left", true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play("right", true);
    }
    else {
        player.setVelocityX(0);
        player.anims.play("turn");
    }

    if ((cursors.up.isDown || cursors.space.isDown) && player.body.touching.down) {
        player.setVelocityY(-500);
    }
}

function collectbottle(player, bottle) {

    bottle.disableBody(true, true);

    score += 10;
    scoreText.setText("Score: " + score);

    return score;
}

function gameOver(scrore){
    if(score>50){
        window.location.href = "../victory.html"
    }else {
        window.location.href = "../lost.html"
    }
}
