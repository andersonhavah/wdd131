// use the date object
const today = new Date();

// Select the DOM element for output
const currentYear = document.getElementById("currentYear");
const lastModification = document.querySelector("#lastModified");

// Output the year
currentYear.innerHTML = today.getFullYear();

// Output the date and time of the last modification
lastModification.innerHTML = `Last Modification: ${document.lastModified} `;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

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
        "templeName": "Cedar City Utah",
        "location": "Cedar City, Utah, United States",
        "dedicated": "2017, December, 10",
        "area": 42657,
        "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x250/Cedar-City-1978603.jpg"
    },
    {
        "templeName": "Provo City Center",
        "location": "Provo, Utah, United States",
        "dedicated": "2016, March, 20",
        "area": 85084,
        "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
    },
    {
        "templeName": "Winter Quarters Nebraska",
        "location": "Florence, Nebraska, United States",
        "dedicated": "2001, April, 22",
        "area": 16000,
        "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
    }
];


// Select the container where you want to append the temple cards
const templeContainer = document.querySelector('.image-container');

// Loop through the temples array to create cards for each temple
temples.forEach(temple => {
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
    templeArea.textContent = `Area: ${temple.area.toLocaleString()} sq ft`; // Format area with commas for thousands
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
