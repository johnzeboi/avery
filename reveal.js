// Select all list items
const listItems = document.querySelectorAll("#loveList li");
let currentIndex = 0;

// Select the reveal button
const button = document.getElementById("revealBtn");

// Reveal next item on click
button.addEventListener("click", () => {
    if (currentIndex < listItems.length) {
        listItems[currentIndex].classList.add("show");
        currentIndex++;

        // Hide button when all items revealed
        if (currentIndex === listItems.length) {
            button.style.display = "none";
        }
    }
});
