// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Dynamic Dish of the Week ---
    const dishes = [
        {
            name: "Fufu with Peanut Sauce",
            description: "A staple food made from pounded yams or cassava, served with a rich and savory groundnut (peanut) soup.",
            imageSrc: "images/fufu-peanut-soup-medium.webp",
            altText: "Bowl of fufu with peanut sauce"
        },
        {
            name: "Gboma Dessi",
            description: "Gboma Dessi, a flavorful spinach and tomato stew with fried fish often paired with a corn dough dish, similar to polenta.",
            imageSrc: "images/gboma-dessi.webp",
            altText: "Gboma Dessi sauce with fried fish"
        },
        {
            name: "Koklo Meme (Grilled Chicken)",
            description: "Deliciously marinated and grilled chicken, often seasoned with local spices and served with various sides.",
            imageSrc: "images/koklo-meme.webp",
            altText: "Grilled chicken pieces with spices"
        },
        {
            name: "Ablo",
            description: "Steamed corn and rice flour cakes, slightly sweet and often enjoyed with savory sauces or as a snack.",
            imageSrc: "https://placehold.co/600x300/cccccc/333333?text=Ablo+Cakes",
            altText: "Steamed Ablo cakes"
        }
        
    ];

    // Function to display a random dish
    function displayRandomDish() {
        const dishContent = document.getElementById('dish-content');
        if (!dishContent) return; // Exit if element not found

        const nameElement = document.getElementById('dish-name');
        const descriptionElement = document.getElementById('dish-description');
        const imageElement = document.getElementById('dish-image');

        if (nameElement && descriptionElement && imageElement && dishes.length > 0) {
            // Select a random dish
            const randomIndex = Math.floor(Math.random() * dishes.length);
            const selectedDish = dishes[randomIndex];

            // Update the DOM elements
            nameElement.textContent = selectedDish.name;
            descriptionElement.textContent = selectedDish.description;
            imageElement.src = selectedDish.imageSrc;
            imageElement.alt = selectedDish.altText;
        } else {
            // Fallback if elements are missing or no dishes defined
            if (nameElement) nameElement.textContent = "Featured Dish";
            if (descriptionElement) descriptionElement.textContent = "Check back soon for our featured Togolese dish!";
            if (imageElement) {
                 imageElement.src = 'https://placehold.co/600x300/cccccc/555555?text=Dish+Info+Unavailable';
                 imageElement.alt = 'Placeholder for featured dish';
            }
        }
    }

    // Call the function to display the dish when the page loads
    displayRandomDish();

    // --- Dynamic Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = mainNav.classList.contains('is-open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- Future JS implementations ---
    // - Form handling for find-food.html
    // - Dish filtering logic for dishes.html
    // - Lazy loading for images

}); // End DOMContentLoaded
