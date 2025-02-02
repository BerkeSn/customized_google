let url = "https://www.google.com/search?q="; // Base URL for the Google search query
const search_input = document.querySelector(".searchInput"); // Get the search input element
const searchBtn = document.querySelector(".search-btn"); // Get the search button element

// Add an event listener to the search button
searchBtn.addEventListener("click", () => {
    // Check if the input field is not empty
    if (search_input.value != "") {
        url += search_input.value; // Append the search query to the URL
        window.open(url, "_blank"); // Open the search URL in a new tab
        search_input.value = ""; // Clear the search input field after the search
    }
});
