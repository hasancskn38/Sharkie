class Character extends MovableObject {
  height = 200;
  width = 200;
  coin = 0;
  poison = 0;
  x = 150;
  y = 150;
  offset = {
    top: 90,
    bottom: 40,
    left: 35,
    right: 35
  }
  world;
  isSlaping = false;
  isBubbling = false;
  isBubblingPoisoned = false;
  isMoving = false;
  isSleeping = false;
  isInvincible = false;
  splash_sound = new Audio('audio/Splash.mp3');
  finslap_sound = new Audio('audio/finslap.mp3');
  swim_sound = new Audio('audio/sharkyswimming.mp3');
  IMAGES_SWIM = [
    'img/1.Sharkie/3.Swim/1.png',
    'img/1.Sharkie/3.Swim/2.png',
    'img/1.Sharkie/3.Swim/3.png',
    'img/1.Sharkie/3.Swim/4.png',
    'img/1.Sharkie/3.Swim/5.png',
    'img/1.Sharkie/3.Swim/6.png'
  ];
  IMAGES_IDLE = [
    'img/1.Sharkie/1.IDLE/1.png',
    'img/1.Sharkie/1.IDLE/2.png',
    'img/1.Sharkie/1.IDLE/3.png',
    'img/1.Sharkie/1.IDLE/4.png',
    'img/1.Sharkie/1.IDLE/5.png',
    'img/1.Sharkie/1.IDLE/6.png',
    'img/1.Sharkie/1.IDLE/7.png',
    'img/1.Sharkie/1.IDLE/8.png',
    'img/1.Sharkie/1.IDLE/9.png',
    'img/1.Sharkie/1.IDLE/10.png',
    'img/1.Sharkie/1.IDLE/11.png',
    'img/1.Sharkie/1.IDLE/12.png',
    'img/1.Sharkie/1.IDLE/13.png',
    'img/1.Sharkie/1.IDLE/14.png',
    'img/1.Sharkie/1.IDLE/15.png',
    'img/1.Sharkie/1.IDLE/16.png',
    'img/1.Sharkie/1.IDLE/17.png',
    'img/1.Sharkie/1.IDLE/18.png',
  ]

  IMAGES_GOSLEEP = [
    'img/1.Sharkie/2.Long_IDLE/i1.png',
    'img/1.Sharkie/2.Long_IDLE/I2.png',
    'img/1.Sharkie/2.Long_IDLE/I3.png',
    'img/1.Sharkie/2.Long_IDLE/I4.png',
    'img/1.Sharkie/2.Long_IDLE/I5.png',
    'img/1.Sharkie/2.Long_IDLE/I6.png',
    'img/1.Sharkie/2.Long_IDLE/I7.png',
    'img/1.Sharkie/2.Long_IDLE/I8.png',
    'img/1.Sharkie/2.Long_IDLE/I9.png',
    'img/1.Sharkie/2.Long_IDLE/I9.png',
    'img/1.Sharkie/2.Long_IDLE/I10.png',
    'img/1.Sharkie/2.Long_IDLE/I11.png',

  ]

  IMAGES_LONG_IDLE = [
    'img/1.Sharkie/2.Long_IDLE/I12.png',
    'img/1.Sharkie/2.Long_IDLE/I13.png',
    'img/1.Sharkie/2.Long_IDLE/I14.png',
  ]
  IMAGES_BUBBLETRAP = [
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
    'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
  ]
  IMAGES_FINSLAP = [
    'img/1.Sharkie/4.Attack/Fin slap/1.png',
    'img/1.Sharkie/4.Attack/Fin slap/2.png',
    'img/1.Sharkie/4.Attack/Fin slap/3.png',
    'img/1.Sharkie/4.Attack/Fin slap/4.png',
    'img/1.Sharkie/4.Attack/Fin slap/5.png',
    'img/1.Sharkie/4.Attack/Fin slap/6.png',
    'img/1.Sharkie/4.Attack/Fin slap/7.png',
    'img/1.Sharkie/4.Attack/Fin slap/8.png',
  ]
  IMAGES_POISONED = [
    'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
  ]
  IMAGES_DEAD = [
    'img/1.Sharkie/6.dead/1.Poisoned/1.png',
    'img/1.Sharkie/6.dead/1.Poisoned/2.png',
    'img/1.Sharkie/6.dead/1.Poisoned/3.png',
    'img/1.Sharkie/6.dead/1.Poisoned/4.png',
    'img/1.Sharkie/6.dead/1.Poisoned/5.png',
    'img/1.Sharkie/6.dead/1.Poisoned/6.png',
    'img/1.Sharkie/6.dead/1.Poisoned/7.png',
    'img/1.Sharkie/6.dead/1.Poisoned/8.png',
    'img/1.Sharkie/6.dead/1.Poisoned/9.png',
    'img/1.Sharkie/6.dead/1.Poisoned/10.png',
    'img/1.Sharkie/6.dead/1.Poisoned/11.png',
    'img/1.Sharkie/6.dead/1.Poisoned/12.png',
  ]
  IMAGES_DEAD_PARALYZED = [
    'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
    'img/1.Sharkie/6.dead/2.Electro_shock/10.png'
  ]
  IMAGES_PARALYZED = [
    'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
    'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
    'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
  ]
  IMAGES_POISONEDBUBBLE = [
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
    'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
  ]
  constructor() {
    super().loadImage('img/1.Sharkie/1.IDLE/1.png');
    // first of all you have to load all the images to display them
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_BUBBLETRAP);
    this.loadImages(this.IMAGES_FINSLAP);
    this.loadImages(this.IMAGES_GOSLEEP);
    this.loadImages(this.IMAGES_POISONED);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_PARALYZED);
    this.loadImages(this.IMAGES_DEAD_PARALYZED);
    this.loadImages(this.IMAGES_POISONEDBUBBLE);
    this.intervallsMovingCharacter();
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('keydown', this.handleKeyDown2.bind(this));
    document.addEventListener('keydown', this.handleKeyDown3.bind(this));
    document.getElementById('finslap').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startSlap(true);
    });

    document.getElementById('bubble').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startBubbling(true);
    });

    document.getElementById('poisonedbubble').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startBubblingPoisoned(true);
    });
    this.i = 0;
  }

  /**
   * Handles key down event for space key, triggering the startSlap function.
   * @param {Event} event - The keydown event object.
   */
  handleKeyDown(event) {
    // Check if the space key is pressed
    if (event.code == 'Space') {
      // Call the startSlap function
      this.startSlap(true);
    }
  }

  /**
   * Handles key down event for the 'H' key, triggering the startBubbling function.
   * @param {Event} e - The keydown event object.
   */
  handleKeyDown2(e) {
    // Check if the 'H' key is pressed (key code 72)
    if (e.keyCode == 72) {
      // Call the startBubbling function
      this.startBubbling(true);
    }
  }

  /**
   * Handles key down event for the 'J' key, triggering the startBubblingPoisoned function.
   * @param {Event} e - The keydown event object.
   */
  handleKeyDown3(e) {
    // Check if the 'J' key is pressed (key code 74)
    if (e.keyCode == 74) {
      // Call the startBubblingPoisoned function
      this.startBubblingPoisoned(true);
    }
  }

  /**
   * Starts the slapping animation if not already slapping.
   */
  startSlap() {
    if (!this.isSlaping) {
      this.isSlaping = true;
      this.currentImage = 0;
      this.finslap_sound.play();
    }
  }

  /**
   * Starts the bubbling animation if not already bubbling.
   */
  startBubbling() {
    if (!this.isBubbling && !this.otherDirection) {
      this.isBubbling = true;
      this.currentImage = 0;
    }
  }

  /**
   * Starts the poisoned bubbling animation if not already poisoned bubbling.
   */
  startBubblingPoisoned() {
    if (!this.isBubblingPoisoned && !this.otherDirection) {
      this.isBubblingPoisoned = true;
      this.currentImage = 0;
    }
  }

  moveLeft() {
    return this.x += this.speed - 2;
    isMoving = true;
  }

  moveRight() {
    return this.x += this.speed + 2;
    isMoving = true;
  }

  handleDead() {
    this.playAnimationOnce(this.world.normalAttack ? this.IMAGES_DEAD : this.IMAGES_DEAD_PARALYZED);
    if (this.world.normalAttack) setTimeout(() => this.applyGravityWhenDead(), 400);
  }
  
  handleSlaping() {
    this.playAnimation(this.IMAGES_FINSLAP);
    if (this.currentImage >= this.IMAGES_FINSLAP.length) this.isSlaping = false;
  }
  
  handleBubbling() {
    this.playAnimation(this.IMAGES_BUBBLETRAP);
    if (this.currentImage >= this.IMAGES_BUBBLETRAP.length) this.isBubbling = false;
  }
  
  handleBubblingPoisoned() {
    this.playAnimation(this.IMAGES_POISONEDBUBBLE);
    if (this.currentImage >= this.IMAGES_POISONEDBUBBLE.length) this.isBubblingPoisoned = false;
  }
  
  handleHurt() {
    this.playAnimation(this.IMAGES_PARALYZED);
    if (this.world.normalAttack) this.playAnimation(this.IMAGES_POISONED);
  }
  
  handleMovement() {
    this.isMoving = true;
    this.playAnimation(this.IMAGES_SWIM);
  }
  
  handleIdle() {
    this.playAnimation(this.IMAGES_IDLE);
  }  

  /**
   * Sets intervals for moving the character and animating the character's actions.
   */
  intervallsMovingCharacter() {
    setInterval(() => {
      if (this.isDead() || !gameRunning) return;
      const { LEFT, A, RIGHT, D, UP, W, DOWN, S } = this.world.keyboard;
      const isLeft = (LEFT || A) && this.x > 0;
      const isRight = (RIGHT || D) && this.x < this.world.level.level_end_x;
      const isUp = (UP || W) && this.y > -80;
      const isDown = (DOWN || S) && this.y < this.world.level.level_end_y;
      const handleMovement = () => {
        if (isLeft) this.moveLeft(), this.otherDirection = true;
        if (isRight) this.moveRight(), this.otherDirection = false;
        if (isUp) this.y += this.speed - 2;
        if (isDown) this.y += this.speed + 2;
        if (isLeft || isRight || isUp || isDown) this.swim_sound.play();
        else this.swim_sound.pause(), this.swim_sound.currentTime = 0;
        this.world.camera_x = -this.x;
      };
      handleMovement();
    }, 500 / 60);

    /**
     * Function to animate the character when swimming or floating.
     */
    setInterval(() => {
      if (!gameRunning) return;
      if (this.isDead()) {
        this.handleDead.call(this);
      } else if (this.isSlaping) {
        this.handleSlaping.call(this);
      } else if (this.isBubbling) {
        this.handleBubbling.call(this);
      } else if (this.isBubblingPoisoned) {
        this.handleBubblingPoisoned.call(this);
      } else if (this.isHurt() && !(this.isSlaping || this.isBubbling || this.isBubblingPoisoned)) {
        this.handleHurt.call(this);
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.D || this.world.keyboard.A || this.world.keyboard.S || this.world.keyboard.W) {
        this.handleMovement.call(this);
      } else {
        this.handleIdle.call(this);
      }
    }, 100);
    
  }
}