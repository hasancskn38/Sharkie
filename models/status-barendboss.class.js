class StatusBarEndBoss extends DrawableObject {
    percentage = 100;
    isVisible = false;
    IMAGES_LIFE = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_ copia 2.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png',
    ];
    /**
   * Creates an instance of StatusBarEndBoss.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_LIFE);
    this.x = 470;
    this.y = 20;
    this.width = 220;
    this.height = 60;
    this.setPercentage(100);
  }

  /**
   * Draws the status bar on the canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  draw(ctx) {
    if (this.isVisible) { // Check the condition for visibility
      super.draw(ctx);
    }
  }

  /**
   * Sets the percentage value of the status bar.
   * @param {number} percentage - The percentage value to set.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_LIFE[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}