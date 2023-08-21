class JellyfishYellow extends MovableObject {
  height = 80;
  width = 80;
  energy = 100;
  IMAGES_YELLOWJELLY = [
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
  ];
  IMAGES_DEAD = [
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
    'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
  ]
  speed = .1;

  /**
   * Creates a new instance of the Yellow Jellyfish enemy.
   * @param {number} startY - The starting y-coordinate for the movement range.
   * @param {number} endY - The ending y-coordinate for the movement range.
   */
  constructor(startY, endY) {
    super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
    this.x = 2320;
    this.y = 400;
    this.startY = startY;
    this.endY = endY;
    this.loadImages(this.IMAGES_YELLOWJELLY);
    this.loadImages(this.IMAGES_DEAD);
    this.direction = 'down'; // start by moving down
    this.animate();
  }

  /**
   * Animates the yellow jellyfish, controlling its movement and animation.
   */
  animate() {
    setInterval(() => {
      if (gameRunning) {
        this.playAnimation(this.IMAGES_YELLOWJELLY);
        if (this.isDead()) {
          this.playAnimation(this.IMAGES_DEAD);
          this.applyGravityWhenDead();
        } else if (this.direction === 'down') {
          this.moveDown();
        } else if (this.direction === 'up') {
          this.moveUp();
        }
      }
    }, 300);
  }

  /**
   * Moves the yellow jellyfish up within the defined movement range.
   */
  moveUp() {
    if (!this.isDead() && gameRunning) {
      const animateUp = () => {
        if (this.y > this.startY && !this.isDead() && gameRunning) {
          this.y -= this.speed;
          requestAnimationFrame(animateUp);
        } else if (gameRunning) {
          this.direction = 'down'; // change direction when reaching the top
        }
      };
      animateUp();
    }
  }

  /**
   * Moves the yellow jellyfish down within the defined movement range.
   */
  moveDown() {
    if (!this.isDead() && gameRunning) {
      const animateDown = () => {
        if (this.y < this.endY && !this.isDead() && gameRunning) {
          this.y += this.speed;
          requestAnimationFrame(animateDown);
        } else if (gameRunning) {
          this.direction = 'up'; // change direction when reaching the bottom
        }
      };
      animateDown();
    }
  }

}