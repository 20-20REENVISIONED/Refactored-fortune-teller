/**
 * Event listener for two buttons and the text box
 */
document.addEventListener("DOMContentLoaded", function () {
  var feedbackButton = document.getElementById("feedback-button");
  var clearButton = document.getElementById("clear-button");
  var feedbackTextbox = document.getElementById("feedback-textbox");

  /**
   * If user click the submit button, it will redirect users to this page agian
   * and wipe out everything in the text box
   */
  if (feedbackButton) {
    feedbackButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  /**
   * If user click the clear text button, it will wipe out everything from textbox
   */
  if (clearButton) {
    clearButton.addEventListener("click", function () {
      feedbackTextbox.value = "";
    });
  }
});

/**
 * When user click the submit button, it will trigger a pop-up with the thank you message.
 */
document.addEventListener("DOMContentLoaded", function () {
  var feedbackButton = document.getElementById("feedback-button");
  var feedbackTextbox = document.getElementById("feedback-textbox");

  if (feedbackButton) {
    feedbackButton.addEventListener("click", function () {
      // Clear the textbox
      feedbackTextbox.value = "";
      // Show the thank you message
      alert("Thanks for your feedback!");
    });
  }
});
