// 1. Select the necessary elements from the DOM
const toggleButton = document.querySelector("#dark-mode-toggle");
const bodyElement = document.querySelector("body");

// 2. Add an event listener to listen for 'click' events on the button
toggleButton.addEventListener("click", function() {
    
    // 3. Toggle the 'dark-mode' class on the body element
    bodyElement.classList.toggle("dark-mode");
    
    // Optional Enhancement: Change the button text based on the current mode
    if (bodyElement.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
        console.log("Dark mode activated"); // Helps with verifying no red errors in console
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
        console.log("Light mode activated");
    }
});