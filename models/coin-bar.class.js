/**
 * Represents a Coinbar, which is a subclass of DrawableObject.
 */
class Coinbar extends DrawableObject {
    percentage = 0;
    IMAGES_COINS = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ];

    /**
     * Creates a new instance of Coinbar.
     */
    constructor() {
        // Call the methods of the parent class DrawableObject using super()
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 12;
        this.y = 50;
        this.width = 220;
        this.height = 60;
        this.setPercentage(0);
    }

    /**
     * Sets the percentage value and updates the image accordingly.
     * @param {number} percentage - The percentage value of the coinbar.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}
