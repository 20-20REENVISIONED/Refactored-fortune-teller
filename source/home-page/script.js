import { pick } from "../utils.js";

/**
 * Event handler for the "Randomize" button. Clicks a random card to navigate to
 * the corresponding page.
 */
function randomize() {
  // Get all the card containers
  const cardContainers = document.querySelectorAll(".card-container");

  // Retrieve the corresponding card container element
  const randomCardContainer = pick(cardContainers);

  // Trigger the click event on the random card container
  randomCardContainer.click();
}

// Get the "Randomize" button element
const randomizeButton = document.querySelector(".randomize-button");

/** Add click event listener to the "Randomize" button */
randomizeButton.addEventListener("click", randomize);

let play = document.querySelector(".play-music-button");
let stop = document.querySelector(".stop-music-button");
let audio = document.getElementById("music-audio");
function playMusic() {
  audio.play();
}
function stopMusic() {
  audio.pause();
}
play.addEventListener("click", playMusic);
stop.addEventListener("click", stopMusic);