class sound extends DrawableObject {
  IMAGE_SOUND_MUTE = 'img/icons/silent-line-icon.png';
  IMAGE_SOUND = 'img/icons/sound-full-icon.png';
  world;

  /**
   * Creates an instance of SoundControlButton.
   * @param {World} world - The game world.
   */
  constructor(world) {
    super();
    this.loadImage(this.IMAGE_SOUND);
    this.x = 550;
    this.y = 10;
    this.width = 35;
    this.height = 25;
    this.isMuted = false;
    this.world = world;

    /**
     * Handles the click event on the image.
     * @param {MouseEvent} event - The click event.
     */
    canvas.addEventListener('click', this.handleImageClick.bind(this));
  }

  /**
   * Handles the click event on the image.
   * @param {MouseEvent} event - The click event.
   */
  handleImageClick(event) {
    // Get the click coordinates relative to the canvas
    const x = event.offsetX;
    const y = event.offsetY;

    // Check if the click occurred within the boundaries of the image
    if (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    ) {
      // Toggle the mute state
      this.isMuted = !this.isMuted;
      this.updateImage();

      // Stop or play the game sounds based on the mute state
      if (this.isMuted) {
        this.world.stopGameSounds();
      } else {
        this.world.playGameSounds();
      }
    }
  }

  /**
   * Updates the image based on the current mute state.
   */
  updateImage() {
    const imageSrc = this.isMuted ? this.IMAGE_SOUND_MUTE : this.IMAGE_SOUND;
    this.loadImage(imageSrc);
  }
}