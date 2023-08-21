class StatusBar extends DrawableObject {
    percentage = 100;
    IMAGES_LIFE = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png'
    ];
    
  /**
   * Creates an instance of StatusBar.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_LIFE);
    this.x = 10;
    this.y = 0;
    this.width = 220;
    this.height = 60;
    this.setPercentage(100);
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