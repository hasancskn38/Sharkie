class ShootableObject extends DrawableObject {
    height = 55;
    width = 55;

    IMAGES_POISONBOTTLE = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png'
    ]
    
     /**
   * Creates an instance of PoisonBottle.
   */
  constructor() {
    super();
    this.loadImage('img/4. Marcadores/Posión/Animada/1.png');
    this.x = 1 + Math.random() * 2200;
    this.y = 1 + Math.random() * 440;
    this.loadImages(this.IMAGES_POISONBOTTLE);
    this.animate();
  }

  /**
   * Animates the Poison Bottle object.
   */
  animate() {
    setInterval(() => {
      if (gameRunning) {
        this.playAnimation(this.IMAGES_POISONBOTTLE);
      }
    }, 100);
  }
}





