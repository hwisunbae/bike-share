function initMap() {
    // Hide loader
	$('.loader').hide();
    const glasgow = {
        lat: 55.860916,
        lng: -5.251433
    };
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 12,
        center: glasgow,
    });

    // Get location
    //infoWindow = new google.maps.InfoWindow();
    //const locationButton = document.createElement("button");
    //locationButton.textContent = "Get Current Location";
    //locationButton.classList.add("custom-map-control-button");
    //map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    // !!!HERE WE CALL THE GEOLOCATION IN ORDER TO GET CURRENT LOCATION!!!
    //locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        // Show loader until location is found
        $('.loader').show();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                //Hide loader when location found
                $('.loader').hide();
                // Redirect to and center map to the location
                map.setCenter(pos);
                // Place marker to current location
                placeMarker(pos, map); // place marker to the current location
 new google.maps.Marker({
                    position: pos,
                    icon: '../../static/admin/img/route.png',
                    map: map,
                  });

                // place the values in the input box !!!HERE WE GET THE CURRENT LOCATION VALUES!!!
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
    //});

    // Add a marker at the selected location.
    for (i = 0; i < loc_lat.length; i++) {
    const location = {
            lat: loc_lat[i],
            lng: loc_lon[i]
        };

    addMarker(location, map);
    }

    // Add a bike marker at the selected location.
    for (i = 0; i < loc_lat_bike.length; i++) {
    const bike_location = {
            lat: loc_lat_bike[i],
            lng: loc_lon_bike[i]
        };

    addBikeMarker(bike_location, map);
    }

    // Add a route marker at the selected location.
    for (i = 0; i < loc_lat_route.length; i++) {
    const route_location = {
            lat: loc_lat_route[i],
            lng: loc_lon_route[i]
        };

    addRouteMarker(route_location, map);
    }

//    getApi(glasgow,map)

     var server = setInterval(function(){
//     alert(123)
            getApi(glasgow,map);
        },5000);
}

//Initialize Marker
//let marker;

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
  // Add a marker with a label
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}

// Add a bike to the map.
function addBikeMarker(location, map) {
  // Add a marker with bicycle icon
  new google.maps.Marker({
    position: location,
    icon: '../../static/admin/img/bicycle.png',
    map: map,
  });
}

// Add a route marker to the map.
function addRouteMarker(location, map) {
  // Add a marker with route icon
  new google.maps.Marker({
    position: location,
    icon: '../../static/admin/img/route.png',
    map: map,
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


function initMap1(glasgow,map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            //Hide loader when location found
            $('.loader').hide();
            // Redirect to and center map to the location
            map.setCenter(pos);
            // Place marker to current location
            placeMarker(pos, map); // place marker to the current location
            new google.maps.Marker({
                position: pos,
                icon: '../../static/admin/img/route.png',
                map: map,
              });

            // place the values in the input box !!!HERE WE GET THE CURRENT LOCATION VALUES!!!
            document.getElementById("lat").value = position.coords.latitude.toFixed(5);
            document.getElementById("lng").value = position.coords.longitude.toFixed(5);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
    );
  }
    else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}



function getApi(glasgow,map) {


//        setInterval(getApi(glasgow,map),5*1000);
        var latitude = $("#lat").val()
        var longitude = $("#lng").val()
        initMap1(glasgow,map)
        bikeRouteId = $("#bikeRouteId").val()
        bikeId = $("#bikeId").val()
        $.ajax({
            url:"/u_biking/recordLocation",
            type:"POST",
            data:{
                bikeRouteId:bikeRouteId,
                bikeid:bikeId,
                latitude:latitude,
                longitude:longitude
            },
            success:function(data){
                if(data == "needLogin"){
                    alert("need location at first")
                    window.location.href = "../u_login/index"
                }
            },
            fail:function(data){
                alert("error")
                window.location.href = "../u_login/index"
            }
        })
    }

