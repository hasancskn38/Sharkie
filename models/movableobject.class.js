// Super Class for Objects that can move
class MovableObject extends DrawableObject {
    speed = .3;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    speedY = 0;
    acceleration = .001;

    /**
     * Applies gravity to the character when it's dead.
     */
    applyGravityWhenDead() {
        setTimeout(() => {
            setInterval(() => {
                if (this.energy == 0) {
                    this.y += this.speedY;
                    this.speedY -= this.acceleration;
                }
            }, 1600 / 25);
        }, 600);
    }

    /**
     * Checks if the character is colliding with another object.
     * @param {object} mo - The object to check collision with.
     * @returns {boolean} True if colliding, false otherwise.
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Processes a hit to the character, decreasing its energy.
     */
    hit() {
        const now = new Date().getTime();
        const timeSinceLastHit = now - this.lastHit;
        this.energy -= 3;
        if (timeSinceLastHit >= 300) {
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lastHit = now;
            }
        }
    }

    /**
     * Checks if the character is currently in a hurt state.
     * @returns {boolean} True if in a hurt state, false otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1.5;
    }

    /**
     * Checks if the character is dead.
     * @returns {boolean} True if dead, false otherwise.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Plays the animation for the character using the provided images.
     * @param {Array} images - The array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Plays the animation for the character once using the provided images.
     * @param {Array} images - The array of image paths for the animation.
     */
    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        if (i < images.length - 1) {
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }

    /**
     * Moves the character to the left continuously.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

}