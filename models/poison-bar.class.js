class Poisonbar extends DrawableObject {
    static percentage = 0;
    IMAGES_POISONBAR = [
        'img/4. Marcadores/orange/0_ copia.png',
        'img/4. Marcadores/orange/20_ copia.png',
        'img/4. Marcadores/orange/40_ copia.png',
        'img/4. Marcadores/orange/60_ copia.png',
        'img/4. Marcadores/orange/80_ copia.png',
        'img/4. Marcadores/orange/100_ copia.png'
    ];
     /**
   * Creates an instance of PoisonBar.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_POISONBAR);
    this.x = 10;
    this.y = 100;
    this.width = 220;
    this.height = 60;
    this.setPercentage(0);
  }

  /**
   * Sets the percentage of the PoisonBar and updates the displayed image.
   * @param {number} percentage - The percentage value.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_POISONBAR[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
  
}