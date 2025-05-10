// js/script.js - UPDATED

document.addEventListener('DOMContentLoaded', () => {

    // --- Reusable Data: All Dishes ---
    // Added tags for filtering
    const allDishes = [
        {
            id: 1,
            name: "Fufu with Peanut Sauce",
            description: "A staple food made from pounded yams or cassava, served with a rich and savory groundnut (peanut) soup.",
            imageSrc: "images/fufu-peanut-soup-medium.webp",
            altText: "Bowl of fufu with peanut sauce",
            tags: ['yam', 'cassava', 'soup', 'staple']
        },
        {
            id: 2,
            name: "Gboma Dessi",
            description: "Gboma Dessi, a flavorful spinach and tomato stew with fried fish often paired with a corn dough dish, similar to polenta.",
            imageSrc: "images/gboma-dessi.webp",
            altText: "Gboma Dessi sauce with fried fish",
            tags: ['maize', 'stew', 'vegetarian', 'staple'] // Assuming Gboma Dessi can be vegetarian
        },
        {
            id: 3,
            name: "Koklo Meme (Grilled Chicken)",
            description: "Deliciously marinated and grilled chicken, often seasoned with local spices and served with various sides.",
            imageSrc: "images/koklo-meme.webp",
            altText: "Grilled chicken pieces with spices",
            tags: ['chicken', 'grill']
        },
        {
            id: 4,
            name: "Ablo",
            description: "Steamed corn and rice flour cakes, slightly sweet and often enjoyed with savory sauces or as a snack.",
            imageSrc: "images/ablo.webp",
            altText: "Steamed Ablo cakes with chicken and sauce",
            tags: ['maize', 'rice', 'vegetarian', 'snack']
        },
        {
            id: 5,
            name: "Dékoudéssi (Palm Nut Soup)",
            description: "A rich, flavorful soup made from palm fruit pulp, often cooked with fish or meat.",
            imageSrc: "images/palm-nut-soup.webp",
            altText: "Bowl of dark red palm nut soup",
            tags: ['soup', 'palm'] // Can add 'fish' or 'meat' if specific version
        },
        {
            id: 6,
            name: "Ayimolou",
            description: "A simple yet popular dish of rice and beans cooked together, often served with tomato stew or fried fish.",
            imageSrc: "images/ayimolou.webp",
            altText: "Plate of rice and beans cooked together",
            tags: ['rice', 'beans', 'vegetarian', 'staple']
        },
        {
            id: 7,
            name: "Koliko - Fried Yams (Ignames Frites)",
            description: "Slices or chunks of yam deep-fried until golden brown, often served with a spicy pepper sauce (piment).",
            imageSrc: "images/koliko.webp",
            altText: "Pile of golden fried yam sticks",
            tags: ['yam', 'fried', 'vegetarian', 'snack', 'side']
        }
    ];


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

    // --- Dynamic Copyright Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // --- Home Page Specific Logic ---
    const dishContentElement = document.getElementById('dish-content');
    if (dishContentElement) { // Check if we are on the Home page
        // Function to display a random dish (using the allDishes array)
        function displayRandomDish() {
            const nameElement = document.getElementById('dish-name');
            const descriptionElement = document.getElementById('dish-description');
            const imageElement = document.getElementById('dish-image');

            if (nameElement && descriptionElement && imageElement && allDishes.length > 0) {
                const randomIndex = Math.floor(Math.random() * allDishes.length);
                const selectedDish = allDishes[randomIndex];

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
    }


    // --- Dishes Page Specific Logic ---
    const dishesGallery = document.getElementById('dishes-gallery');
    const filterButtons = document.querySelectorAll('.filter-button');

    if (dishesGallery && filterButtons.length > 0) { // Check if we are on the Dishes page

        // Function to create and display dish cards
        function displayDishes(dishesToDisplay) {
            dishesGallery.innerHTML = ''; // Clear current content or loading message

            if (dishesToDisplay.length === 0) {
                dishesGallery.innerHTML = '<p class="loading-message">No dishes match the selected filter.</p>';
                return;
            }

            dishesToDisplay.forEach(dish => {
                // Create elements for the dish card
                const card = document.createElement('article');
                card.className = 'dish-card';

                const image = document.createElement('img');
                image.src = dish.imageSrc;
                image.alt = dish.altText;
                // Basic lazy loading attribute (browser native)
                image.loading = 'lazy';
                // Add onerror handler for images
                image.onerror = function () {
                    this.onerror = null; // Prevent infinite loop if placeholder also fails
                    this.src = 'https://placehold.co/600x200/cccccc/555555?text=Image+Error';
                    this.alt = 'Error loading image';
                };


                const contentDiv = document.createElement('div');
                contentDiv.className = 'dish-card-content';

                const nameHeading = document.createElement('h3');
                nameHeading.textContent = dish.name;

                const descriptionPara = document.createElement('p');
                descriptionPara.textContent = dish.description;

                // Append elements
                contentDiv.appendChild(nameHeading);
                contentDiv.appendChild(descriptionPara);
                card.appendChild(image);
                card.appendChild(contentDiv);
                dishesGallery.appendChild(card);
            });
        }

        // Function to handle filtering
        function filterDishes(filter) {
            let filteredDishes;
            if (filter === 'all') {
                filteredDishes = allDishes;
            } else {
                // Filter based on the tag matching the button's data-filter value
                filteredDishes = allDishes.filter(dish => dish.tags.includes(filter));
            }

            /* Another option for the above if statement is:
            let filteredDishes = (filter === 'all') ? allDishes : allDishes.filter(dish => dish.tags.includes(filter));
            */
            displayDishes(filteredDishes);
        }

        // Add event listeners to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button style
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Get the filter value and apply filter
                const filterValue = button.getAttribute('data-filter');
                filterDishes(filterValue);
            });
        });

        // Initial display of all dishes when the page loads
        displayDishes(allDishes);
    }

    // --- Find Food Page Specific Logic ---
    const findFoodForm = document.getElementById('find-food-form');
    const formMessage = document.getElementById('form-message');

    if (findFoodForm && formMessage) { // Check if we are on the Find Food page

        findFoodForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default browser submission

            // Clear previous messages
            formMessage.textContent = '';
            formMessage.className = 'form-message'; // Reset classes

            // Basic check if required fields are filled (HTML5 required handles most)
            const locationInput = document.getElementById('location-name');
            const dishInput = document.getElementById('dish-recommendation');

            if (!locationInput.value.trim() || !dishInput.value.trim()) {
                 formMessage.textContent = 'Please fill out the required fields (Location and Dish).';
                 formMessage.classList.add('error');
                 return; // Stop submission
            }


            // Get data from the form
            const formData = new FormData(findFoodForm);
            const submission = {
                finderName: formData.get('finder_name') || 'Anonymous', // Default if empty
                locationName: formData.get('location_name'),
                dishRecommendation: formData.get('dish_recommendation'),
                comments: formData.get('comments'),
                timestamp: new Date().toISOString() // Add a timestamp
            };

            try {
                // --- localStorage Interaction ---
                // Retrieve existing submissions or initialize an empty array
                let submissions = JSON.parse(localStorage.getItem('foodFinds')) || [];

                // Add the new submission
                submissions.push(submission);

                // Save back to localStorage
                localStorage.setItem('foodFinds', JSON.stringify(submissions));

                // --- Display Success Message & Clear Form ---
                formMessage.textContent = 'Thank you for sharing your find!';
                formMessage.classList.add('success');
                findFoodForm.reset(); // Clear the form fields

                // Optional: Hide message after a few seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000); // Hide after 5 seconds

            } catch (error) {
                console.error("Error saving to localStorage:", error);
                formMessage.textContent = 'Sorry, there was an error saving your submission. Please try again.';
                formMessage.classList.add('error');
                 // Handle potential storage errors (e.g., storage full)
                 if (error.name === 'QuotaExceededError') {
                     formMessage.textContent = 'Storage limit reached. Cannot save submission.';
                 }
            }
        });
    }
    
    // --- Future JS implementations ---
    // - Form handling for find-food.html
    // - More sophisticated lazy loading (if needed)
    // - Use localStorage for filter persistence?

}); // End DOMContentLoaded
