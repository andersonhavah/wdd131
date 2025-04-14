document.addEventListener('DOMContentLoaded', () => {

    // Get the span element where the count will be displayed
    const countSpan = document.getElementById('reviewCount');
    const storageKey = 'reviewSubmitCount'; // Key for localStorage

    // Check if the count span exists
    if (countSpan) {
        // 1. Get the current count from localStorage
        let reviewCount = localStorage.getItem(storageKey);

        // 2. Check if a count exists and is a valid number, otherwise initialize to 0
        if (reviewCount === null || isNaN(parseInt(reviewCount))) {
            reviewCount = 0;
        } else {
            reviewCount = parseInt(reviewCount); // Convert string from localStorage to number
        }

        // 3. Increment the counter because this page loads upon successful submission
        reviewCount++;

        // 4. Update the display on the page
        countSpan.textContent = reviewCount;

        // 5. Save the new count back to localStorage
        localStorage.setItem(storageKey, reviewCount);

    } else {
        console.error("Review count display element not found!");
    }
});