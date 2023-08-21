class fullScreen extends DrawableObject {
  IMAGE_SCREEN = 'img/icons/expand-icon.png';

  /**
   * Creates a new instance of the Screen element.
   */
  constructor() {
    super();
    this.loadImage(this.IMAGE_SCREEN);
    this.x = 600;
    this.y = 10;
    this.width = 32;
    this.height = 22;

    // Add an event listener for the "click" event on the canvas
    canvas.addEventListener('click', this.handleImageClick.bind(this));
  }

  /**
   * Handles the click event on the screen image.
   * @param {MouseEvent} event - The click event object.
   */
  handleImageClick(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // Check if the click occurred within the boundaries of the image
    if (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    ) {
      // Check if the browser is currently in full-screen mode
      if (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      ) {
        // Exit full-screen mode if already in full-screen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          // Firefox
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          // Chrome, Safari, and Opera
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          // Internet Explorer
          document.msExitFullscreen();
        }
      } else {
        // Enter full-screen mode if not in full-screen
        if (canvas.requestFullscreen) {
          canvas.requestFullscreen();
        } else if (canvas.mozRequestFullScreen) {
          // Firefox
          canvas.mozRequestFullScreen();
        } else if (canvas.webkitRequestFullscreen) {
          // Chrome, Safari, and Opera
          canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) {
          // Internet Explorer
          canvas.msRequestFullscreen();
        }
      }
    }
  }
}