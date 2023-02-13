// Function to fetch the XMLFile data using AJAX
function loadXMLFileData() {
  var data = new XMLHttpRequest();
  data.open("GET", "restaurants.xml", true);
  data.onreadystatechange = function () {
    if (data.readyState === 4 && data.status === 200) {
      var xmlDoc = data.responseXML;
      var restaurants = xmlDoc.getElementsByTagName("restaurant");

      for (var i = 0; i < restaurants.length; i++) {
        // Loop for the restaurants and add each one to the unordered list
        var restaurant = restaurants[i];
        var name = restaurant.getAttribute("name");
        var address = restaurant.getAttribute("address");
        var lat = restaurant.getAttribute("lat");
        var lng = restaurant.getAttribute("lng");
        var type = restaurant.getAttribute("type");

        var color = type === "sitdown" ? "green" : "red"; // color of the text based on the type

        var li = document.createElement("li"); //// Create the list item for the restaurant details
        li.innerHTML =
          '<strong style="color: ' +
          color +
          '">' +
          name +
          "</strong><br>" +
          address +
          "</strong><br>" +
          lat +
          "</strong><br>" +
          lng +
          "</strong><br>" +
          type;
        document.getElementById("restaurantList").appendChild(li);
        document.getElementById("myButton").style.display = "none";
      }
    }
  };
  data.send();
}
