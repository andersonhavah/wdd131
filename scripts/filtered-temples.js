// This is the JSON data for the temples
// The data includes the temple name, location, dedication date, area in square feet, and an image URL
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x250/Cedar-City-1978603.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
    },
    {
        templeName: "Winter Quarters Nebraska",
        location: "Florence, Nebraska, United States",
        dedicated: "2001, April, 22",
        area: 16000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
    }
];

// Select the container where you want to append the temple cards
const templeContainer = document.querySelector('.image-container');

// Select the DOM elements for navigation
const navLinks = document.querySelectorAll('.navigation a');

// Filter function to display temples based on a condition
function filterTemples(filter) {
    // Clear the current temple cards
    templeContainer.innerHTML = '';

    // Filter the temples array based on the filter condition
    let filteredTemples;
    switch (filter) {
        case 'Old':
            filteredTemples = temples.filter(temple => {
                const year = new Date(temple.dedicated).getFullYear();
                return year < 1900;
            });
            break;
        case 'New':
            filteredTemples = temples.filter(temple => {
                const year = new Date(temple.dedicated).getFullYear();
                return year > 2000;
            });
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'Home':
        default:
            filteredTemples = temples; // No filter, show all temples
            break;
    }

    // Loop through the filtered temples array to create and display cards
    filteredTemples.forEach(temple => {
        // Create the card div
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card'); // Add a class for styling

        // Create and append the temple name
        const templeName = document.createElement('h2');
        templeName.textContent = temple.templeName;
        templeCard.appendChild(templeName);

        // Create and append the location
        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;
        templeCard.appendChild(templeLocation);

        // Create and append the dedication date
        const templeDedication = document.createElement('p');
        templeDedication.textContent = `Dedicated: ${temple.dedicated}`;
        templeCard.appendChild(templeDedication);

        // Create and append the area
        const templeArea = document.createElement('p');
        templeArea.textContent = `Size: ${temple.area.toLocaleString()} sq ft`; // Format area with commas for thousands
        templeCard.appendChild(templeArea);

        // Create and append the temple image
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} Temple`; // Descriptive alt text
        templeImage.loading = 'lazy'; // Enable native lazy loading
        templeCard.appendChild(templeImage);

        // Append the temple card to the container
        templeContainer.appendChild(templeCard);
    });
}

// Event listeners for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        link.classList.add('active');

        // Get the filter from the clicked link's title attribute
        const filter = link.title;

        // Filter and display the temples based on the selected filter
        filterTemples(filter);
    });
});

// Initially display all temples (Home view)
filterTemples('Home');


/* Another solution is the code below:

// Select the navigation menu links
const navLinks = document.querySelectorAll('.navigation a');

// Function to display filtered temples
function displayTemples(filterCondition) {
    templeContainer.innerHTML = ''; // Clear the container
    const filteredTemples = temples.filter(filterCondition);
    filteredTemples.forEach(temple => {
        // Create the card div
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card'); // Add a class for styling

        // Create and append the temple name
        const templeName = document.createElement('h2');
        templeName.textContent = temple.templeName;
        templeCard.appendChild(templeName);

        // Create and append the location
        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;
        templeCard.appendChild(templeLocation);

        // Create and append the dedication date
        const templeDedication = document.createElement('p');
        templeDedication.textContent = `Dedicated: ${temple.dedicated}`;
        templeCard.appendChild(templeDedication);

        // Create and append the area
        const templeArea = document.createElement('p');
        templeArea.textContent = `Size: ${temple.area.toLocaleString()} sq ft`; // Format area with commas for thousands
        templeCard.appendChild(templeArea);

        // Create and append the temple image
        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = `${temple.templeName} Temple`; // Descriptive alt text
        templeImage.loading = 'lazy'; // Enable native lazy loading
        templeCard.appendChild(templeImage);

        // Append the temple card to the container
        templeContainer.appendChild(templeCard);
    });
}

// Add event listeners to navigation links for filtering
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const filterType = link.textContent.toLowerCase(); // Get the filter type from the link text
        
        switch (filterType) {
            case 'old':
                displayTemples(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                displayTemples(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                displayTemples(temple => temple.area > 90000);
                break;
            case 'small':
                displayTemples(temple => temple.area < 10000);
                break;
            case 'home':
                displayTemples(() => true); // Display all temples
                break;
        }
    });
});

// Initialize by displaying all temples
displayTemples(() => true);
*/