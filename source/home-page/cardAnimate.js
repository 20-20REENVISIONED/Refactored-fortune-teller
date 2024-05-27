document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");

  // Convert NodeList to array
  cards = Array.from(cards);

  // Shuffle the array randomly
  shuffleArray(cards);

  // Animate shuffled cards into position
  anime({
    targets: cards,
    translateY: [-400, 0], // Initial Y position to final position
    opacity: [0, 1], // Fade in animation
    rotate: {
      value: "+=360", // Spin rapidly 360 degrees
      duration: 800, // Duration of spinning animation
      easing: "easeInOutSine", // Easing for spinning animation
    },
    scale: [0.8, 1], // Bounce effect - start smaller and expand to full size
    easing: "easeOutElastic(1, 0.8)", // Easing for bounce effect
    delay: anime.stagger(1000), // Stagger animation for each card
  });
});

// Function to shuffle array elements randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
