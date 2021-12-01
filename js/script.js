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

var player;
var platforms;
var cursors;
var stars;
var scoreText;
var bombs;

function create () {
    platforms = this.physics.add.staticGroup();

    // мащабираме обекта по 2 и за да се заредят промените, .refreshBody()
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(70, 250, "ground");
    platforms.create(650, 250, "ground");

    // задаваме му отскок, т.е. след като се приземи от скок, ще отскочи малко
    player.setBounce(0.2);
    // играча се отблъсква от границите на света
    player.setCollideWorldBounds(true);

    // в .body е физическото тяло на играча
    player.body.setGravityY(300); // задаваме му тежест

    // задаваме сблъсък между играча и пларформите
    this.physics.add.collider(player, platforms);

    stars = this.physics.add.group({
        key: "star", // използваме изображението на звездата
        repeat: 11, // създаваме 12 обекта (имаме създаден 1 автоматично)
        setXY: { x: 12, y: 0, stepX: 70 } // първия обект ще бъде сложен на (12, 0), а всеки следващ ще промени хоризонталната си позиция със 70 пиксела
    });

    // итерираме всеки обект от групата
    stars.children.iterate(function (child) {
        // задаваме на всеки произволна стойност на отскок межву 0.1 и 0.3
        child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
    });

    // задаваме сблъсък на звездите с платформите
    this.physics.add.collider(stars, platforms);

    // задаваме допир на играча с която и да е звезда, при допир, извикваме функцията collectStar, подавайки и player и докоснатата звезда
    this.physics.add.overlap(player, stars, collectStar, null, this);

    // 16, 16 са координатите
    // "score: 0" е текста
    // другото е шрифта
    scoreText = this.add.text(16, 16, "Score: 0", {fontSize: "32px", fill: "#000"});

    // добавяме бомби
    bombs = this.physics.add.group();
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    // обект cursors, с 4 свойства up, down, left, right (в случая стрелките на клавиатурата)
    cursors = this.input.keyboard.createCursorKeys();
}

function update () {
    if (cursors.left.isDown) {
        player.setVelocityX(-160); // отрицателна скорост 160, т.е. наляво по абсц. ос
        player.anims.play("left", true); // извършваме анимация наляво
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play("right", true);
    }
    else {
        player.setVelocityX(0);
        player.anims.play("turn");
    }

    // ако стрелката нагоре е натисната (или space) и ако играча е на земята
    if ((cursors.up.isDown || cursors.space.isDown) && player.body.touching.down) {
        player.setVelocityY(-500); // скок
    }
}

function collectStar(player, star) {
    // физичното тяло на звезда бива забранено, а обектът на играта,
    // който го притежава, се отбелязва като неактивен и невидим
    star.disableBody(true, true);

    // добавяме точки
    score += 10;
    scoreText.setText("Score: " + score);

    // ако няма звезди
    if(stars.countActive(true) === 0) {

        // съживяваме всички звезти
        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true)
        });

        // избираме случайна координата по X, винаги от срещуположната половина на екрана спрямо играча
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        // създаваме бомба
        var bomb = bombs.create(x, 16, "bomb");
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        // караме я да скача, задавайки и произволни стойности
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}
