class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -180;
    statusBar = new StatusBar();
    statusBarEndBoss = new StatusBarEndBoss();
    coinBar = new Coinbar();
    poisonBar = new Poisonbar();
    gameoverPlayed = false;
    Bubbles = [];
    poisonedBubbles = [];
    isFlipped = false;
    normalAttack = true;
    endboss = this.level.enemies.find(e => e instanceof Endboss);
    electricity_sound = new Audio('audio/electricity.mp3');
    bubble_sound = new Audio('audio/bubble.mp3');
    coin_sound = new Audio('audio/coin.mp3');
    bottle_sound = new Audio('audio/collectingbottle.mp3');
    gameOver_sound = new Audio('audio/gameover.mp3');
    gameWon_sound = new Audio('audio/gamewon.mp3');
    endBossHurt_sound = new Audio('audio/endbosshurt.mp3');
    jellyFishDead_sound = new Audio('audio/jellyfishdead.mp3');
    gameSound = new Audio('audio/ingame.mp3');
    gameClick = new Audio()


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.runIntervals();
        document.addEventListener('click', this.handleDocumentClick.bind(this));
    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    /**
     * A function that runs a specific interval, where all the functions are inside that need to be called
     * every time, to reduce the amount of intervals.
     */
    runIntervals() {
        setInterval(() => {
            this.checkCollisionWithEnemies();
            this.checkAttackCollisionWithPufferFish();
            this.checkCollisionsWithCollectables();
            this.checkAttackCollisionWithEnemy();
            this.checkAttackCollisionWithEndBoss();
            this.checkBubbleShoot();
            this.setPercentagesOfBars();
            this.checkIfGameFinished();
        }, 100);
    }

    /**
     * Audio Event when clicking on document
     */
    handleDocumentClick() {
        this.gameClick.play();
      }


    /**
     * Resets the game by resetting character and end boss properties.
     */
    resetGame() {
        // reset character properties
        this.character.energy = 100;
        this.character.coin = 0;
        this.character.poison = 0;
        this.character.x = 2300;
        this.character.y = 150;
        // reset end boss properties
        this.endboss.energy = 100;
        this.endboss.x = 2800;
        this.endboss.y = 0;
        this.endboss.hadFirstContact = false;
        this.endboss.isVisible = false;
        this.statusBarEndBoss.isVisible = false;
        this.character.otherDirection = false;
    }

    /**
     * Checks if the game has finished (either character energy is zero or end boss energy is zero),
     * and takes appropriate actions.
     */
    checkIfGameFinished() {
        // Check if character energy is zero
        if (this.character.energy <= 0 && !this.gameOverPlayed) {
            return this.checkIfGameLost();
        }
        // Check if end boss energy is zero
        if (this.endboss.energy <= 0 && !this.gameWonPlayed) {
            return this.checkIfGameWon();
        }
    }

    /**
     * Handles actions when the game is lost.
     */
    checkIfGameLost() {
        setTimeout(() => {
            showGameOverScreen();
            gameRunning = false;
            this.gameSound.muted = true;
            this.gameOver_sound.volume = .2
            this.gameOver_sound.play();
            this.resetGame();
        }, 3000);
        this.gameOverPlayed = true;
    }

    /**
     * Handles actions when the game is won.
     */
    checkIfGameWon() {
        setTimeout(() => {
            showGameOverScreenWin();
            gameRunning = false;
            this.gameSound.muted = true;
            this.gameWon_sound.volume = .2
            this.gameWon_sound.play();
            this.resetGame();
        }, 3000);
        this.gameOverPlayed = true;
    }

    /**
     * Stops all game sounds.
     */
    stopGameSounds() {
        this.bubble_sound.muted = true;
        this.coin_sound.muted = true;
        this.bottle_sound.muted = true;
        this.gameOver_sound.muted = true;
        this.gameWon_sound.muted = true;
        this.endBossHurt_sound.muted = true;
        this.jellyFishDead_sound.muted = true;
        // this.gameSound.volume = 0;
        this.gameSound.muted = true;
        this.electricity_sound.muted = true;
        this.character.splash_sound.muted = true;
        this.character.swim_sound.muted = true;
        this.character.finslap_sound.muted = true;
    }

    /**
     * Plays all game sounds.
     */
    playGameSounds() {
        this.bubble_sound.muted = false;
        this.coin_sound.muted = false;
        this.bottle_sound.muted = false;
        this.gameOver_sound.muted = false;
        this.gameWon_sound.muted = false;
        this.endBossHurt_sound.muted = false;
        this.jellyFishDead_sound.muted = false;
        // this.gameSound.currentTime = 0;
        // this.gameSound.volume = .2;
        this.gameSound.muted = false;
        this.electricity_sound.muted = false;
        this.character.splash_sound.muted = false;
        this.character.swim_sound.muted = false;
        this.character.finslap_sound.muted = false;
    }

    /**
     * Sets the percentages of various bars based on character and end boss properties.
     */
    setPercentagesOfBars() {
        this.poisonBar.setPercentage(this.character.poison);
        this.coinBar.setPercentage(this.character.coin);
        this.statusBar.setPercentage(this.character.energy);
        this.statusBarEndBoss.setPercentage(this.endboss.energy);
    }

    /**
     * Check if a Bubble has been shot, with an implemented reload of 2 seconds.
     */
    checkBubbleShoot() {
        if (this.keyboard.H && !this.shootTimeout && !this.character.otherDirection) {
            return this.checkNormalBubbleShoot();
        } else if (this.keyboard.J && !this.shootTimeoutPoisoned && this.character.poison >= 21  && !this.character.otherDirection) {
            return this.checkPoisonedBubbleShoot();
        }
    }

    /**
     * Handles actions when a normal bubble is shot.
     */
    checkNormalBubbleShoot() {
        let bubble = new Bubble(this.character.x + 140, this.character.y + 110);
        this.Bubbles.push(bubble);
        this.bubble_sound.play();
        this.shootTimeout = setTimeout(() => {
            this.shootTimeout = null;
            this.Bubbles.splice(this.Bubbles.indexOf(bubble), 1);
        }, 2000);
    }

    /**
     * Handles actions when a poisoned bubble is shot.
     */
    checkPoisonedBubbleShoot() {
        let poisonedBubble = new PoisonedBubble(this.character.x + 140, this.character.y + 110);
        this.poisonedBubbles.push(poisonedBubble);
        this.bubble_sound.play();
        this.character.poison -= 21;
        this.shootTimeoutPoisoned = setTimeout(() => {
            this.shootTimeoutPoisoned = null;
            this.poisonedBubbles.splice(this.poisonedBubbles.indexOf(poisonedBubble), 1);
        }, 2000);
    }


    /**
     * Checks for attack collisions with enemies and performs necessary actions.
     */

    checkAttackCollisionWithPufferFish() {
        const nonEndbossEnemies = this.level.enemies.filter(enemy => !(enemy instanceof Endboss));
        nonEndbossEnemies.forEach(enemy => {
            if (enemy instanceof PufferFish && this.character.isColliding(enemy) && this.character.isSlaping) {
                this.reduceEnemyEnergy(enemy);
            } 
        });
    }

    /**
     * Checks for attack collisions with enemies and performs necessary actions.
     */
    checkAttackCollisionWithEnemy() {
        const nonEndbossEnemies = this.level.enemies.filter(enemy => !(enemy instanceof Endboss));
        nonEndbossEnemies.forEach(enemy => {
          if ((enemy instanceof Jellyfish || enemy instanceof DangerousJellyFish || enemy instanceof JellyfishYellow) &&
            (this.Bubbles.some(bubble => bubble.isColliding(enemy)) || this.poisonedBubbles.some(poisonedBubble => poisonedBubble.isColliding(enemy)))) {
            this.handleBubbleCollision(enemy);
            this.jellyFishDead_sound.play();
          }
        });
      }
      
      handleBubbleCollision(enemy) {
        const bubbleIndex = this.Bubbles.findIndex(bubble => bubble.isColliding(enemy));
        const bubbleIndexPoison = this.poisonedBubbles.findIndex(poisonedBubble => poisonedBubble.isColliding(enemy));
        if (bubbleIndex !== -1) {
          this.Bubbles.splice(bubbleIndex, 1);
          this.reduceEnemyEnergy(enemy);
        } else if (bubbleIndexPoison !== -1) {
          this.poisonedBubbles.splice(bubbleIndexPoison, 1);
          this.reduceEnemyEnergy(enemy);
        }
      }

    checkAttackCollisionWithEndBoss() {
        const bubbleIndexPoison = this.poisonedBubbles.findIndex(poisonedBubble => poisonedBubble.isColliding(this.endboss));
        if (bubbleIndexPoison !== -1) {
            this.poisonedBubbles.splice(bubbleIndexPoison, 1);
            this.endboss.energy -= 40;
        }
        if (bubbleIndexPoison !== -1) {
            this.endboss.hit();
            this.endBossHurt_sound.play();
        }
    }

    /**
     * Reduces the energy of an enemy.
     * @param {object} enemy - The enemy object whose energy will be reduced.
     */
    reduceEnemyEnergy(enemy) {
        enemy.energy -= 100;
        if (enemy.energy < 0) {
            enemy.energy = 0;
        }
    }

    /**
     * Checks collisions with different enemies and plays different animations.
     */
    checkCollisionWithEnemies() {
        const nonEndbossEnemies = this.level.enemies.filter(enemy => !(enemy instanceof Endboss));
        nonEndbossEnemies.forEach(enemy => {
          if (gameRunning && enemy.energy > 0 && this.character.isColliding(enemy)) {
            this.character.hit();
            this.normalAttack = enemy instanceof PufferFish;
            if (this.character.energy > 0 && (enemy instanceof Jellyfish || enemy instanceof JellyfishYellow || enemy instanceof DangerousJellyFish)) {
              this.electricity_sound.play();
              this.normalAttack = false;
            } else if (this.character.energy < 0) {
              this.electricity_sound.muted = true;
            }
          }
        });
        return this.checkCollisionWithEndboss();
      }
      

    /**
     * Checks collision with the end boss and performs necessary actions.
     */
    checkCollisionWithEndboss() {
        if (gameRunning && this.character.isColliding(this.endboss) && this.endboss.energy > 0) {
            this.endboss.collisionCharacter = true;
            this.character.hit();
        } else {
            this.endboss.collisionCharacter = false;
            this.normalAttack = true;
        }
    }

    /**
     * Checks collisions with collectables, removes them from the array, and performs necessary actions.
     */
    checkCollisionsWithCollectables() {
        if (gameRunning) {
            this.level.collectableObjects.forEach((collectableObject, index) => {
                if (collectableObject instanceof ShootableObject && this.character.isColliding(collectableObject)) {
                    this.collectAndPlaySound(this.level.collectableObjects, index, this.character, 'poison', 21, 100, this.bottle_sound);
                } else if (collectableObject instanceof Coin && this.character.isColliding(collectableObject)) {
                    this.collectAndPlaySound(this.level.collectableObjects, index, this.character, 'coin', 21, 100, this.coin_sound);
                }
            });
        }
    }

    /**
     * Collects a collectable object, plays a sound, and updates the corresponding character property.
     * @param {array} collectablesArray - The array containing the collectable objects.
     * @param {number} index - The index of the collectable object to be collected.
     * @param {object} character - The character object.
     * @param {string} property - The property of the character object to be updated.
     * @param {number} value - The value to be added to the character property.
     * @param {object} sound - The sound to be played when the object is collected.
     */
    collectAndPlaySound(collectablesArray, index, character, property, value, maxValue, sound) {
        collectablesArray.splice(index, 1);
        character[property] += value;
        if (character[property] > maxValue) {
            character[property] = maxValue;
        }
        sound.play();
    }


    draw() {
        // In the draw method you can decide which object should be above another
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.collectableObjects);
        this.addObjectsToMap(this.level.enemies);
        // this.addObjectsToMap(this.barriers);
        this.addObjectsToMap(this.Bubbles);
        this.addObjectsToMap(this.poisonedBubbles);
        this.ctx.translate(-this.camera_x, 0);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.coinBar);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarEndBoss);
        this.addToMap(this.poisonBar);
        // this.addToMap(this.setting);
        // this.addToMap(this.fullScreen);
        // this.addToMap(this.sound);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        this.ctx.translate(this.camera_x, 0);
        // this.ctx.translate(-this.camera_x, 0);
        // this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        // 'this' doesnt work in that function so we have to declare a varibale with the value this
        let self = this;
        // method that schedules a function to be executed on the next avaible frame in the browser
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    };

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
        this.isFlipped = true;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1
        this.ctx.restore();
    }
}