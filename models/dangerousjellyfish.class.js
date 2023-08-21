/**
 * Represents a Dangerous Jellyfish, which is a subclass of MovableObject.
 */
class DangerousJellyFish extends MovableObject {
  world;
  height = 100;
  width = 100;
  energy = 100;
  speed = 0.06;
  IMAGES_DANGEROUS = [
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
    'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
  ];

  IMAGES_DEAD = [
    'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
    'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
    'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
    'img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
  ]

  /**
   * Creates a new instance of DangerousJellyFish.
   * @param {number} x - The initial x coordinate.
   * @param {number} y - The initial y coordinate.
   * @param {number} startX - The starting x coordinate for movement.
   * @param {number} endX - The ending x coordinate for movement.
   */
  constructor(x, y, startX, endX) {
    super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
    this.x = x;
    this.y = y;
    this.startX = startX;
    this.endX = endX;
    this.loadImages(this.IMAGES_DANGEROUS);
    this.loadImages(this.IMAGES_DEAD);
    this.direction = 'left';
    this.animate();
  }

  /**
   * Animates the movement and animation of the DangerousJellyFish.
   */
  animate() {
    setInterval(() => {
      if (gameRunning) {
        this.playAnimation(this.IMAGES_DANGEROUS);
        if (this.isDead()) {
          this.playAnimation(this.IMAGES_DEAD);
          this.applyGravityWhenDead();
        } else if (this.direction == 'left') {
          this.moveLeft();
        } else if (this.direction == 'right') {
          this.moveRight();
        }
      }
    }, 200)
  }

  /**
   * Moves the DangerousJellyFish to the left.
   * Changes direction when reaching the left boundary.
   */
  moveLeft() {
    if (!this.isDead() && gameRunning) {
      const animateLeft = () => {
        if (this.x > this.startX && !this.isDead() && gameRunning) {
          this.x -= this.speed;
          requestAnimationFrame(animateLeft);
        } else if (gameRunning) {
          this.direction = 'right'; // change direction when reaching the left boundary
        }
      };
      animateLeft();
    }
  }

  /**
   * Moves the DangerousJellyFish to the right.
   * Changes direction when reaching the right boundary.
   */
  moveRight() {
    if (!this.isDead() && gameRunning) {
      const animateRight = () => {
        if (this.x < this.endX && !this.isDead() && gameRunning) {
          this.x += this.speed;
          requestAnimationFrame(animateRight);
        } else if (gameRunning) {
          this.direction = 'left'; // change direction when reaching the right boundary
        }
      };
      animateRight();
    }
  }
}
