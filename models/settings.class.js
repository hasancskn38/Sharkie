class Setting extends DrawableObject {
  IMAGE_SETTINGS = 'img/icons/gamepad-icon.png';

    /**
   * Creates an instance of SettingsButton.
   */
    constructor() {
      super();
      this.loadImage(this.IMAGE_SETTINGS);
      this.x = 650;
      this.y = 10;
      this.width = 35;
      this.height = 25;
  
      // Add an event listener for the "click" event on the canvas
      canvas.addEventListener('click', this.handleImageClick.bind(this));
  
      // Add an event listener for the fullscreen change event on the canvas
      canvas.addEventListener('fullscreenchange', this.handleFullscreenChange.bind(this));
    }
  
    /**
     * Handles the click event on the Settings Button.
     * @param {MouseEvent} event - The click event object.
     */
    handleImageClick(event) {
      const x = event.offsetX;
      const y = event.offsetY;
  
      if (
        x >= this.x &&
        x <= this.x + this.width &&
        y >= this.y &&
        y <= this.y + this.height
      ) {
        let settingsContainer = document.getElementById('instruction-ingame');
        let overlay = document.getElementById('overlay');
  
        if (settingsContainer) {
          settingsContainer.classList.remove('d-none');
          overlay.classList.remove('d-none');
          gameRunning = false;
        }
      }
    }
  
    /**
     * Handles the fullscreen change event on the canvas.
     */
    handleFullscreenChange() {
      // Reattach the event listener for the "click" event on the canvas
      canvas.addEventListener('click', this.handleImageClick.bind(this));
    }
}
