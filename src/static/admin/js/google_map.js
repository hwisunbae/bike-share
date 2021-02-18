function initMap() {
    const glasgow = {
        lat: 55.860916,
        lng: -4.251433
    };
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 12,
        center: glasgow,
    });



// Get location
infoWindow = new google.maps.InfoWindow();
const locationButton = document.createElement("button");
locationButton.textContent = "Get Current Location";
locationButton.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

locationButton.addEventListener("click", () => {
  // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            // Place marker to current location
            placeMarker(pos, map); // place marker to the current location
            // place the values in the input box
            map.setCenter(pos);
            document.getElementById("lat").value = position.coords.latitude.toFixed(5);
            document.getElementById("lng").value = position.coords.longitude.toFixed(5);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
});



    // Add a marker at the selected location.
    for (i = 0; i < loc_lat.length; i++) {
    const location = {
            lat: loc_lat[i],
            lng: loc_lon[i]
        };

    addMarker(location, map);
    }

    // This event listener calls placeMarker() when the map is clicked.
    google.maps.event.addListener(map, "click", (event) => {
        placeMarker(event.latLng, map);
        // get latitude and longitude of click
        var clickLat = event.latLng.lat();
        var clickLon = event.latLng.lng();

        // place the values in the input box
        document.getElementById("lat").value = clickLat.toFixed(5);
        document.getElementById("lng").value = clickLon.toFixed(5);
    });

}



// Place a new marker to the map.
function placeMarker(location, map) {
    if (marker) {
        marker.setPosition(location);
    } else {
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
}

// Add a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}