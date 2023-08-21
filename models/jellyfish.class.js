class Jellyfish extends MovableObject {
  height = 100;
  width = 100;
  energy = 100;
  IMAGES_REGULAR = [
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
    'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
  ];
  IMAGES_DEAD = [
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
    'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
  ]
  speed = 0.06;


  /**
   * Creates a new instance of the Jellyfish enemy.
   * @param {number} y - The initial y-coordinate of the jellyfish.
   * @param {number} startY - The starting y-coordinate for the movement range.
   * @param {number} endY - The ending y-coordinate for the movement range.
   */
  constructor(y, startY, endY) {
    super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
    this.x = 900;
    this.y = y;
    this.startY = startY;
    this.endY = endY;
    this.loadImages(this.IMAGES_REGULAR);
    this.loadImages(this.IMAGES_DEAD);
    this.direction = 'down'; // start by moving down
    this.animate();
  }

  /**
   * Animates the jellyfish, controlling its movement and animation.
   */
  animate() {
    setInterval(() => {
      if (gameRunning) {
        this.playAnimation(this.IMAGES_REGULAR);
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
   * Moves the jellyfish up within the defined movement range.
   */
  moveUp() {
    if (!this.isDead() && gameRunning) {
      const animateUp = () => {
        if (!this.isDead() && this.y > this.startY && gameRunning) {
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
   * Moves the jellyfish down within the defined movement range.
   */
  moveDown() {
    if (!this.isDead() && gameRunning) {
      const animateDown = () => {
        if (!this.isDead() && this.y < this.endY && gameRunning) {
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