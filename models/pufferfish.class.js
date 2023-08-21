class PufferFish extends MovableObject {
    height = 50;
    width = 50;
    energy = 100;
    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ]

    /**
   * Creates an instance of PufferFish.
   */
  constructor() {
    super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
    this.y = 1 + Math.random() * 450;
    this.x = 1 + Math.random() * 1800;
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DEAD);
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
    this.intervallsMovingCharacter();
  }

  /**
   * Animates the Puffer Fish object.
   */
  animate() {
    setInterval(() => {
      if (gameRunning) {
        if (this.isDead()) {
          this.playAnimation(this.IMAGES_DEAD);
          this.applyGravityWhenDead();
        } else {
          this.playAnimation(this.IMAGES_SWIM);
        }
      }
    }, 100);
  }

  /**
   * Moves the Puffer Fish object.
   */
  intervallsMovingCharacter() {
    setInterval(() => {
      if (!this.isDead() && gameRunning) {
        this.x += Math.random() * -0.5;
      }
    }, 500 / 60);
  }
}