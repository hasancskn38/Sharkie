/**
 * Represents the JavaScript code related to the game initialization, keyboard events, and button press events.
 */

// Variables
let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let gameOver = false;
let gameRunning = false;
let imagesToLoad = 0;
let imagesLoaded = 0;
let gameClick = new Audio('audio/selectionsound.mp3');


/**
 * Initializes the canvas element.
 */
function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  // Add any other initialization logic for the canvas
}


/**
 * Starts the game by initializing the level, creating a new World object,
 * and updating the necessary elements' classes and visibility.
 */
function startGame() {
  initLevel();
  world = new World(canvas, keyboard);
  gameOver = false;
  document.getElementById('canvas').classList.remove('d-none');
  bindBtnPressEvents();
  startInstructionContainer.classList.add('d-none');
  endscreen.classList.add('d-none');
  heading.classList.add('d-none');
  startScreen.classList.add('d-none');
  endscreenWin.classList.add('d-none');
  heading.classList.add('d-none');
  backgroundGameplay.classList.remove('d-none');
  document.getElementById('tryagainbutton').classList.add('d-none');
  document.getElementById('start-button').classList.add('d-none');
  document.getElementById('loadscreen').classList.remove('d-none');
  document.getElementById('panel').classList.remove('d-none');
  document.getElementById('settings').classList.remove('d-none');
  document.getElementById('fullscreen').classList.remove('d-none');
  document.getElementById('mute').classList.remove('d-none');
  world.gameSound.volume = 0.2;
  world.gameSound.play();
  gameClick.play();
}


/**
 * Displays the game over screen when the player loses the game.
 * It updates the necessary elements' classes and visibility.
 */
function showGameOverScreen() {
  gameStarted = false;
  gameOver = true;
  document.getElementById('panel').classList.add('d-none');
  document.getElementById('canvas').classList.add('d-none');
  endscreen.classList.remove('d-none');
  setTimeout(() => {
    document.getElementById('tryagainbutton').classList.remove('d-none');
  }, 3000);
}


/**
 * Displays the game over screen when the player wins the game.
 * It updates the necessary elements' classes and visibility.
 */
function showGameOverScreenWin() {
  gameStarted = false;
  gameOver = true;
  document.getElementById('canvas').classList.add('d-none');
  endscreenWin.classList.remove('d-none');
  setTimeout(() => {
    document.getElementById('start-button').classList.remove('d-none');
  }, 3000);
}

document.getElementById('mute').addEventListener('click', function () {
  world.stopGameSounds();
  gameClick.play();
  document.getElementById('mute').classList.add('d-none');
  document.getElementById('unmute').classList.remove('d-none');
})

document.getElementById('unmute').addEventListener('click', function () {
  world.playGameSounds();
  gameClick.play();

  document.getElementById('unmute').classList.add('d-none');
  document.getElementById('mute').classList.remove('d-none');
})

document.getElementById('settings').addEventListener('click', function () {
  let settingsContainer = document.getElementById('instruction-ingame');
  let overlay = document.getElementById('overlay');
  gameClick.play();


  if (settingsContainer) {
    settingsContainer.classList.remove('d-none');
    overlay.classList.remove('d-none');
    gameRunning = false;
  }
})

document.getElementById('fullscreen').addEventListener('click', function () {
  gameClick.play();

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
})



// Keyboard events
window.addEventListener('keydown', (e) => {
  // Update the keyboard object based on the key pressed
  if (e.keyCode === 39) {
    keyboard.RIGHT = true;
  } else if (e.keyCode === 37) {
    keyboard.LEFT = true;
  } else if (e.keyCode === 38) {
    keyboard.UP = true;
  } else if (e.keyCode === 40) {
    keyboard.DOWN = true;
  } else if (e.keyCode === 32) {
    keyboard.SPACE = true;
  } else if (e.keyCode === 72) {
    keyboard.H = true;
  } else if (e.keyCode === 74) {
    keyboard.J = true;
  } else if (e.keyCode === 87) {
    keyboard.W = true;
  } else if (e.keyCode === 65) {
    keyboard.A = true;
  } else if (e.keyCode === 83) {
    keyboard.S = true;
  } else if (e.keyCode === 68) {
    keyboard.D = true;
  }
});

window.addEventListener('keyup', (e) => {
  // Update the keyboard object based on the key released
  if (e.keyCode === 39) {
    keyboard.RIGHT = false;
  } else if (e.keyCode === 37) {
    keyboard.LEFT = false;
  } else if (e.keyCode === 38) {
    keyboard.UP = false;
  } else if (e.keyCode === 40) {
    keyboard.DOWN = false;
  } else if (e.keyCode === 32) {
    keyboard.SPACE = false;
  } else if (e.keyCode === 72) {
    keyboard.H = false;
  } else if (e.keyCode === 74) {
    keyboard.J = false;
  } else if (e.keyCode === 87) {
    keyboard.W = false;
  } else if (e.keyCode === 65) {
    keyboard.A = false;
  } else if (e.keyCode === 83) {
    keyboard.S = false;
  } else if (e.keyCode === 68) {
    keyboard.D = false;
  }
});


// Button press events
document.addEventListener('DOMContentLoaded', () => {
  bindBtnPressEvents();
});


/**
 * Binds the button press events for touch devices.
 * It updates the keyboard object based on the button press and release.
 */
function bindBtnPressEvents() {
  document.getElementById('leftButton').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById('leftButton').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById('rightButton').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById('rightButton').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById('upButton').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });

  document.getElementById('upButton').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });

  document.getElementById('downButton').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });

  document.getElementById('downButton').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  });

  document.getElementById('finslap').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById('finslap').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });

  document.getElementById('bubble').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.H = true;
  });

  document.getElementById('bubble').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.H = false;
  });

  document.getElementById('poisonedbubble').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.J = true;
  });

  document.getElementById('poisonedbubble').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.J = false;
  });
}