document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculate");
  const lifePathDescriptionElement = document.getElementById(
    "life-path-description"
  );
  const calculatePopupWrapper = document.getElementById(
    "calculate-popup-wrapper"
  );
  const closeCalculateButton = document.getElementById(
    "close-calculate-button"
  );
  const calculateNumberElement = document.getElementById("calculate-number");

  // Populate day, month, and year selects
  populateDateInputs();

  calculateButton.addEventListener("click", async () => {
    const day = parseInt(document.getElementById("day").value, 10);
    const month = parseInt(document.getElementById("month").value, 10);
    const year = parseInt(document.getElementById("year").value, 10);

    if (!day || !month || !year) {
      alert("Please enter a valid date.");
      hideOverlay();
      return;
    }

    // Show the loading overlay
    showOverlay();

    setTimeout(async () => {
      const birthday = new Date(year, month - 1, day);
      const lifePathNumber = calculateLifePathNumber(birthday);

      // Fetch life path description
      const lifePathDescription = await getLifePathDescription(lifePathNumber);

      // Construct the HTML content for the description
      let descriptionHTML = "<ul>";
      for (const field in lifePathDescription) {
        if (Object.prototype.hasOwnProperty.call(lifePathDescription, field)) {
          descriptionHTML += `<li><strong>${field}:</strong> ${lifePathDescription[field]}</li>`;
        }
      }
      descriptionHTML += "</ul>";

      // Set the description HTML content
      lifePathDescriptionElement.innerHTML = descriptionHTML;

      // Show the calculate popup
      calculateNumberElement.textContent = lifePathNumber;
      calculatePopupWrapper.style.display = "flex";

      // Hide the loading overlay after calculation is complete
      hideOverlay();
    }, 5000); // 5-second delay
  });

  closeCalculateButton.addEventListener("click", () => {
    calculatePopupWrapper.style.display = "none";
  });

  // Function to populate date inputs
  function populateDateInputs() {
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");

    // Populate days
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      daySelect.appendChild(option);
    }

    // Populate months
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    months.forEach((month, index) => {
      const option = document.createElement("option");
      option.value = index + 1; // Month values are 1-based
      option.textContent = month;
      monthSelect.appendChild(option);
    });

    // Populate years
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }
  }

  // Function to calculate life path number
  function calculateLifePathNumber(date) {
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // months are zero-based
    const year = date.getUTCFullYear();

    const sumDigits = (num) =>
      String(num)
        .split("")
        .reduce((acc, digit) => acc + Number(digit), 0);
    const reduceToSingleDigit = (num) => {
      while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = sumDigits(num);
      }
      return num;
    };

    const lifePathNumber = reduceToSingleDigit(
      sumDigits(day) + sumDigits(month) + sumDigits(year)
    );
    return lifePathNumber;
  }

  async function getLifePathDescription(lifePathNumber) {
    try {
      const response = await fetch("lifepathNumbers.json");
      const descriptions = await response.json();
      const description = descriptions[lifePathNumber];

      if (description) {
        return description;
      } else {
        return "Invalid Life Path Number.";
      }
    } catch (error) {
      console.error("Error fetching life path descriptions:", error);
      return "Error fetching life path descriptions.";
    }
  }

  // Show the overlay when calculating the life path number
  function showOverlay() {
    document.getElementById("overlay").style.display = "block";
  }

  // Hide the overlay when the calculation is complete
  function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the "How to Use" button and the popup wrapper
  const howToButton = document.getElementById("how-to");
  const howToPopupWrapper = document.getElementById("popup-wrapper");

  // Function to toggle the "How to Use" popup
  function toggleHowToPopup() {
    howToPopupWrapper.style.display =
      howToPopupWrapper.style.display === "none" ? "flex" : "none";
  }

  // Event listener for the "How to Use" button
  howToButton.addEventListener("click", toggleHowToPopup);

  // Close the "How to Use" popup when the close button is clicked
  document
    .getElementById("close-button")
    .addEventListener("click", toggleHowToPopup);

  // Get the "Life Path Summary" button and the popup wrapper
  const lifePathSummaryButton = document.getElementById("life-path-summary");
  const summaryPopupWrapper = document.getElementById("summary-popup-wrapper");

  // Function to toggle the "Life Path Summary" popup
  function toggleSummaryPopup() {
    summaryPopupWrapper.style.display =
      summaryPopupWrapper.style.display === "none" ? "flex" : "none";
  }

  // Event listener for the "Life Path Summary" button
  lifePathSummaryButton.addEventListener("click", toggleSummaryPopup);

  // Close the "Life Path Summary" popup when the close button is clicked
  document
    .getElementById("close-summary-button")
    .addEventListener("click", toggleSummaryPopup);
});
