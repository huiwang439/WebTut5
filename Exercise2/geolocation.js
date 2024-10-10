// Get the paragraph element where the location will be displayed
let x = document.getElementById("geolocation");
let coordinatesDiv = document.getElementById("coordinates");

function getGeolocation() {
    // Check if Geolocation API is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation, handleError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    // Display the latitude and longitude
    coordinatesDiv.innerHTML = "Latitude: " + position.coords.latitude + 
                               "<br>Longitude: " + position.coords.longitude;
}

function handleError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            coordinatesDiv.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            coordinatesDiv.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            coordinatesDiv.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            coordinatesDiv.innerHTML = "An unknown error occurred.";
            break;
    }
}
