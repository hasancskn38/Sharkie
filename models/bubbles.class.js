/**
 * Represents a Bubble, which is a subclass of MovableObject.
 */
class Bubble extends MovableObject {
    /**
     * Creates a new instance of Bubble.
     * @param {number} x - The initial x-coordinate of the bubble.
     * @param {number} y - The initial y-coordinate of the bubble.
     * @param {World} world - The world object.
     */
    constructor(x, y, world) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.shoot();
        this.world = world;
    }

    /**
     * Makes the bubble move by changing its position at regular intervals.
     */
    shoot() {
        this.speedX = 5; // Adjust the horizontal speed as per your requirement
        this.speedY = 3 + Math.random();
        setInterval(() => {
            this.x += 5;
            this.y -= this.speedY;
        }, 50);
    }
}
