// use the date object
const today = new Date();

// Select the DOM element for output
const currentYear = document.getElementById("currentYear");
const lastModification = document.querySelector("#lastModified");

// Output the year
currentYear.innerHTML = today.getFullYear();

// Output the date and time of the last modification
lastModification.innerHTML = `Last Modification: ${document.lastModified} `;

 // Static values for temperature and wind speed
 const temperature = 30; // °C
 const windSpeed = 20; // km/h
 const unit = "metric"; // or "imperial" for °F and mph

 // Function to calculate wind chill based on the unit
 function calculateWindChill(temperature, windSpeed, unit) {
     return unit === "metric" 
         ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2)
         : (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
 }

 // Function to determine if conditions are met and call calculateWindChill
 function getWindChill(temperature, windSpeed, unit) {
     if ((unit === "metric" && temperature <= 40 && windSpeed > 4.8) ||
         (unit === "imperial" && temperature <= 50 && windSpeed > 3)) {
         return calculateWindChill(temperature, windSpeed, unit);
     } else {
         return "N/A";
     }
 }

 // Function to display wind chill when the page loads
 function displayWindChill() {
     const windChill = getWindChill(temperature, windSpeed, unit);
     document.getElementById("windChill").innerHTML = `${windChill}&deg;C`;
 }

 // Call the display function when the page loads
 window.onload = displayWindChill;