var UserCountryInput = document.getElementById("countryInputData"); // input Data
var populationList = document.getElementById("populationDatalist"); //  list item

// Function to add country and population to list
function addCountry() {
  var countryName = UserCountryInput.value; // Data from User
  // Fetch data from API
  //fetch("https://restcountries.com/v3.1/name/" + countryName + "?fullText=true")//Search by country full name.
  fetch("https://restcountries.com/v3.1/name/" + countryName) // Search by country name. It can be the native name or partial name
    .then((response) => response.json())
    .then((data) => {
      // Check if country was found
      if (data.length > 0) {
        // Get population from data
        var population = data[0].population;

        // list item for country and population
        var listItem = document.createElement("li");
        listItem.innerHTML = countryName + ": " + population;

        // Add list item to list
        populationList.appendChild(listItem);

        // Clear input field
        UserCountryInput.value = "";
      } else {
        alert("Country not found.");
      }
    });
}

// Add event listener to button
var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addCountry);
