/**
 * Represents a Coin, which is a subclass of DrawableObject.
 */
class Coin extends DrawableObject {
    height = 45;
    width = 45;

    IMAGES_COIN = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ]

    /**
     * Creates a new instance of Coin.
     */
    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.x = 20 + Math.random() * 2200;
        this.y = 1 + Math.random() * 440;
        this.loadImages(this.IMAGES_COIN);
        this.animate();
    }

    /**
     * Animates the Coin by playing a sequence of images.
     */
    animate() {
        setInterval(() => {
            if (gameRunning) {
                this.playAnimation(this.IMAGES_COIN);
            }
        }, 150)
    }
}
