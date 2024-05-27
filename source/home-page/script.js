import { pick } from "../utils.js";

function randomize() {
  console.log("Randomize button clicked.");
  // Retrieve the corresponding card container element
  const randomCardContainer = pick(cardContainers);
  console.log("Random card container selected:", randomCardContainer);

  // Trigger animation for the random card container
  animateCardContainer(randomCardContainer);
}

function handleCardContainerClick(event) {
  event.preventDefault(); // Prevent default link behavior
  console.log("Card container clicked:", event.currentTarget);

  // Trigger animation for the clicked card container
  animateCardContainer(event.currentTarget);
}

/**
 * Animates the specified card container.
 * @param {HTMLElement} cardContainer - The card container element to animate.
 */
function animateCardContainer(cardContainer) {
  // Define animation properties
  gsap.to(cardContainer, {
    opacity: 0, // Fade out the card
    scale: 0.8, // Shrink the card slightly
    y: 50, // Move the card downwards
    skewX: 15, // Skew the card horizontally
    skewY: 15, // Skew the card vertically
    blur: 10, // Apply a blur effect to the card
    duration: 0.5, // Decrease the animation duration for a quicker transition
    ease: "power2.out", // Use a smoother easing function for a more natural feel
    onComplete: function () {
      // Animation complete callback function
      console.log("Animation complete!");
      // After animation, navigate to the next page
      window.location.href = cardContainer.href;
    },
  });
}

// Get the "Randomize" button element
const randomizeButton = document.querySelector(".randomize-button");

// Get all card container elements
const cardContainers = document.querySelectorAll(".card-container");

// Add click event listeners to the "Randomize" button and card containers
randomizeButton.addEventListener("click", randomize);

// Add click event listeners to the card containers
cardContainers.forEach((container) => {
  container.addEventListener("click", handleCardContainerClick);
});
