class Level {
    enemies;
    backgroundObjects;
    collectableObjects;
    level_end_x = 3200;
    level_end_y = 300;

    constructor(enemies, backgroundObjects, collectableObjects, barriers) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectableObjects = collectableObjects;
    }
}