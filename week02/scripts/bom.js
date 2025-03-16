// Declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Create a click event listener for the Add Chapter button
button.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
      // Create a new li element for the chapter title
      const li = document.createElement('li');
      li.textContent = input.value.trim(); // Set the text to the input value
  
      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌'; // Set button text
  
      // Append the delete button to the li element
      li.appendChild(deleteButton);
      // Append the li element to the list
      list.appendChild(li);
  
      // Add an event listener to the delete button to remove the li element when clicked
      deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus(); // Focus back on the input
      });
  
      // Clear the input field
      input.value = '';
    } else {
      // If input is blank, focus back on the input field
      input.focus();
    }
    
    // Ensure the input field is focused regardless of the outcome
    input.focus();
  });