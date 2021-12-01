const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 8000 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
const tileSize = 16;
const tileResize = 2;
var numRows = 4;
var numCols = 5;
var map = [];

function preload ()
{
    this.load.image("skyline", "public/terrain/skyline.jpeg");
    this.load.image("cloud", "public/terrain/cloud2.png");
    this.load.spritesheet('assets', 'public/terrain/Assets.png', {
        frameWidth: tileSize,
        frameHeight: tileSize
    })
    this.load.image('player', 'public/character/Idle(1).png');
    
    map = generateMap(1920*2, 800);
    console.log(map);
}

function create ()
{
    this.cameras.main.setBounds(0, 180, 1920 * 2, 600 );
    this.physics.world.setBounds(0, 180, 1920 * 2, 600 );

    //  Mash 2 images together to create our background
    this.add.image(0, 0, 'skyline').setOrigin(0).setScale(Math.max(1, 3));
    this.add.image(1920, 0, 'skyline').setOrigin(0).setFlipX(true).setScale(Math.max(1, 3));

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.image(100, 100, 'player').setScale(0.1).setBounce(0.2);
    this.player.setCollideWorldBounds(false);
    displayMap(map, this.physics, this.player);

    this.cameras.main.startFollow(this.player);

    this.cameras.main.followOffset.set(0, 0);
    this.physics.add.collider(this.player);
}

function update ()
{
    this.player.setVelocity(0);

    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-300);
        this.player.setFlipX(true);
        this.cameras.main.followOffset.x = -100;
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(300);
        this.player.setFlipX(false);
        this.cameras.main.followOffset.x = -100;
    }
    else 
    {
        this.player.setVelocityY(0);
    }
    
    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        console.log(this.player);
        this.player.setVelocityY(-10000);
        
    }

}
// function render() {

//     game.debug.cameraInfo(game.camera, 32, 32);
//     game.debug.spriteCoords(player, 32, 500);

// }

function displayMap(map, physics, player) {
    var platforms = physics.add.staticGroup();
    for (let x = 0; x < map.length; x++) {
        for (let y = 0; y < map[x].length; y++) {
            if(map[x][y] == 1) {
                platforms.create( 
                    x * tileSize * tileResize + tileSize * tileResize / 2,
                    y * tileSize * tileResize + tileSize * tileResize / 2,
                    'assets', 4
                )
                .setScale(2)
                .refreshBody();

                physics.add.collider(player, platforms);
            }
        }
    }
}


function generateMap(sizeX, sizeY) {
    const row = sizeX / (tileSize * tileResize);
    const col = sizeY / (tileSize * tileResize);
    const map = [];

    let lastGround = -1;
    let groundLength = 0;
    let groundPosition = 0;
    let wall = 0;

    for (let x = 0; x < row; x++) {
        if(lastGround == -1 || Math.random() > 0.5 && lastGround > 1 || lastGround >= 4){  
            groundLength = Math.ceil(Math.random() * 6 + 3);
            groundPosition = Math.floor(Math.random() * col/2 + col/3);
            lastGround = 0;                                                                                                                    
            console.log(groundLength, groundPosition);
        } else {
            lastGround++;
        }

        map[x]=[];

        for (let y = 0; y < col; y++) {
            if(groundLength && groundPosition == y){
                map[x][y] = 1;
                groundLength--;
            }
            else {
                map[x][y] = 0;
            }
        }
    }

    return map;
}