document.addEventListener('DOMContentLoaded', function() {
    var feedbackButton = document.getElementById('feedback-button');
    var clearButton = document.getElementById('clear-button');
    var feedbackTextbox = document.getElementById('feedback-textbox');

    if (feedbackButton) {
        feedbackButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // Change this URL to your feedback page URL
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', function() {
            feedbackTextbox.value = '';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var feedbackButton = document.getElementById('feedback-button');
    var feedbackTextbox = document.getElementById('feedback-textbox');

    if (feedbackButton) {
        feedbackButton.addEventListener('click', function() {
            // Clear the textbox
            feedbackTextbox.value = '';
            // Show the thank you message
            alert('Thanks for your feedback!');
        });
    }
});