class Endboss extends MovableObject {
    height = 350;
    width = 350;
    energy = 100;
    offset = {
        top: 90,
        bottom: 40,
        left: 35,
        right: 35
    }
    world;
    isVisible = false;
    hadFirstContact = false;
    introduceAnimation = false;
    collisionCharacter = false;
    introduceAnimation = false;
    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];
    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ]
    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
    ]

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ]
    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ]
    constructor() {
        // loadImage for one image
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.runIntervals();
        this.y = 0;
        this.x = 2800;
        this.i = 0;
    }

    /**
     * Draws the character on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        if (this.isVisible) {
            super.draw(ctx);
        }
    }

    /**
     * Runs intervals for character actions.
     */
    runIntervals() {
        setInterval(() => {
            if (gameRunning) {
                this.checkIfHadFirstContact();
                this.animate();
                this.moveEndbossTest();
            }
        }, 100);
    }

    /**
     * Checks if the character had the first contact with the player character.
     */
    checkIfHadFirstContact() {
        if (this.world && this.world.character && this.world.character.x > 2450 && !this.hadFirstContact) {
            this.hadFirstContact = true;
            this.world.statusBarEndBoss.isVisible = true;
            this.isVisible = true;
            this.introduceAnimation = true;
            if (this.hadFirstContact) {
                this.i = 0;
                this.currentImage = 0;
            }
        }
    }

    /**
     * Animates the character based on its state.
     */
    animate() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            setTimeout(() => {
                this.applyGravityWhenDead();
            }, 400);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.collisionCharacter && this.world.character.energy > 0) {
            this.playAnimation(this.IMAGES_ATTACK);
            if (this.currentImage >= this.IMAGES_ATTACK.length) {
                this.collisionCharacter = false;
            }
        } else if (this.i < 6 && this.hadFirstContact) {
            this.playAnimation(this.IMAGES_INTRODUCE);
        } else {
            this.playAnimation(this.IMAGES_SWIM);
        }
        this.i++;
    }

    /**
     * Moves the character after the first contact.
     */
    moveEndbossTest() {
        if (this.hadFirstContact) {
            setTimeout(() => {
                this.moveEndboss();
            }, 1500);
        }
    }

    /**
     * Moves the character towards the player character.
     */
    moveEndboss() {
        if (!this.isDead() && gameRunning && this.world.character.energy > 0) {
            // move endboss left
            if (this.world && this.world.character && this.world.character.x < this.x && this.x < this.world.level.level_end_x) {
                this.x -= 4;
                this.otherDirection = false;
            // move endboss right
            } else if (this.world && this.world.character && this.world.character.x > this.x && this.x > 0) {
                this.x += 4;
                this.otherDirection = true;
            }
            // move up
            if (this.world && this.world.character && this.world.character.y < this.y && this.y > -250) {
                this.y -= 4;
            // move down
            } else if (this.world && this.world.character && this.world.character.y > this.y && this.y < 180) {
                this.y += 4;
            }
        }
    }
}