class PoisonedBubble extends MovableObject {

    /**
     * Creates an instance of PoisonedBubble.
     * @param {number} x - The initial x-coordinate of the PoisonedBubble.
     * @param {number} y - The initial y-coordinate of the PoisonedBubble.
     */
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.shootPoisonedBubble();
    }

    /**
     * Shoots the Poisoned Bubble by setting its speed and animating its movement.
     */
    shootPoisonedBubble() {
        this.speedX = 30;
        this.speedY = 5;
        setInterval(() => {
            this.x += 10;
        }, 50);
    }
}