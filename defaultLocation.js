import getWeatherData from "./weather.js";


let currentLocation = document.getElementById("default-location")

export default function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    currentLocation.innerHTML = "Geolocation not supported."
    }
}

function showPosition(position) {
    getWeatherData(position.coords.latitude, position.coords.longitude)
}