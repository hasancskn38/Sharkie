
let level1;

function initLevel() {

level1 = new Level (

    [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        // new PufferFish(),
        // new PufferFish(),
        // new PufferFish(),
        // new PufferFish(),
        new JellyfishYellow(300, 400),
        new Jellyfish(0, 0, 126),
        new Jellyfish(105, 105, 231),
        new Jellyfish(210, 210, 336),
        new DangerousJellyFish(1000, 50, 1200, 1600),
        new DangerousJellyFish(1400, 150, 1200, 1600),
        new DangerousJellyFish(1700, 250, 1200, 1600),
        new DangerousJellyFish(1200, 350, 1200, 1600),
        new Endboss()
    ],
    [
        new BackgroundObject('img/3. Background/Dark/1.png', 0, 0),
        new BackgroundObject('img/3. Background/Dark/2.png', 719, 0),
        new BackgroundObject('img/3. Background/Dark/2.png', -719, 0),
        new BackgroundObject('img/3. Background/Dark/1.png', 719*2, 0),
        new BackgroundObject('img/3. Background/Dark/2.png', 719*3, 0),
        new BackgroundObject('img/3. Background/Dark/1.png', 719*4, 0),
        new BackgroundObject('img/3. Background/Dark/2.png', 719*5, 0),
        new BackgroundObject('img/3. Background/Dark/1.png', -719*2, 0),
        new BackgroundObject('img/3. Background/Dark/2.png', -719*3, 0),
    ],
    [
        new ShootableObject(200, 100),
        new ShootableObject(),
        new ShootableObject(),
        new ShootableObject(),
        new ShootableObject(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ]
);
}