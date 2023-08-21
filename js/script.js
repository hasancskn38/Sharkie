/**
 * Represents the JavaScript code related to the game settings, instructions, and image handling.
 */

// Elements
let hideSettings = document.getElementById('hide-settings');
let settingsContainer = document.getElementById('settings-container');
let showSettings = document.getElementById('show-settings');
let startButton = document.getElementById('start-button');
let startInstructionContainer = document.getElementById('start-instruction-container');
let startScreen = document.getElementById('start-screen');
let instruction = document.getElementById('instruction');
let instructionInGame = document.getElementById('instruction-ingame');
let hideInstructionsInGame = document.getElementById('hide-instructions-ingame');
let hideInstructions = document.getElementById('hide-instructions');
let overlay = document.getElementById('overlay');
let endscreen = document.getElementById('endscreen');
let endscreenWin = document.getElementById('endscreen-win');
let heading = document.getElementById('heading');
let backgroundGameplay = document.getElementById('background-gameplay');
let percent = 0;

/**
 * Event listener for hiding instructions in the game.
 * It adds the 'd-none' class to the instructionInGame and overlay elements,
 * and sets the gameRunning variable to true.
 */
hideInstructionsInGame.addEventListener('click', function() {
    instructionInGame.classList.add('d-none');
    overlay.classList.add('d-none');
    gameRunning = true;
    gameClick.play();

});

/**
 * Event listener for hiding the settings.
 * It adds the 'd-none' class to the settingsContainer element
 * and removes the 'd-none' class from the heading element.
 */
hideSettings.addEventListener('click', function () {
    settingsContainer.classList.add('d-none');
    heading.classList.remove('d-none');
});

/**
 * Event listener for showing the settings.
 * It removes the 'd-none' class from the instruction and overlay elements,
 * adds the 'd-none' class to the startInstructionContainer element,
 * and removes the 'd-none' class from the instruction element.
 */
showSettings.addEventListener('click', function () {
    startInstructionContainer.classList.add('d-none');
    instruction.classList.remove('d-none');
    overlay.classList.remove('d-none');
    heading.classList.add('d-none');
    gameClick.play();
});

/**
 * Event listener for hiding the instructions.
 * It adds the 'd-none' class to the instruction element,
 * removes the 'd-none' class from the heading and startInstructionContainer elements,
 * and adds the 'd-none' class to the overlay element.
 */
hideInstructions.addEventListener('click', function () {
    instruction.classList.add('d-none');
    heading.classList.remove('d-none');
    startInstructionContainer.classList.remove('d-none');
    overlay.classList.add('d-none');
    gameClick.play();
});

// Image handling
const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

/**
 * Displays the next image in the images array.
 */
function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
    gameClick.play();

    
    // Check if the next image is the first image
    if (currentImageIndex === 0) {
      // Show the first image
      images[0].style.display = 'block';
    }
  }
  

/**
 * Displays the previous image in the images array.
 */
function showPreviousImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
    gameClick.play();

}

let currentImageIndexInGame = 0;
let imagesInGame = document.querySelectorAll('.image-container-ingame img');

/**
 * Displays the next image in the imagesInGame array.
 */
function showNextImageInGame() {
    imagesInGame[currentImageIndexInGame].style.display = 'none';
    currentImageIndexInGame = (currentImageIndexInGame + 1) % imagesInGame.length;

    // Check if currentImageIndex is 0, indicating that we have reached the end
    if (currentImageIndexInGame === 0) {
        currentImageIndexInGame = imagesInGame.length - 1; // Set currentImageIndex to the last image index
    }

    imagesInGame[currentImageIndexInGame].style.display = 'block';
}

/**
 * Displays the previous image in the imagesInGame array.
 */
function showPreviousImageInGame() {
    imagesInGame[currentImageIndexInGame].style.display = 'none';
    currentImageIndexInGame = (currentImageIndexInGame - 1 + imagesInGame.length) % imagesInGame.length;
    imagesInGame[currentImageIndexInGame].style.display = 'block';
}

// Loadscreen handling
let loadscreen = document.getElementById('loadscreen');
let loadBeam = document.getElementById('loadbeam');
let loadBeamHeading = document.getElementById('loadBeamHeading');

setInterval(() => {
    loadBeam.innerHTML = `${percent.toFixed(2)}%`;
}, 1000);

