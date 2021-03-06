import getWeatherData from "./weather.js";


export function searchCity() {

    let choosenCity = document.getElementById("search").value
    const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?"
    const appid = "4e026d1d0369716d521ce6646a92a040"
    const dataParams = {

        "q":choosenCity,
        "appid":appid
    }
    document.getElementById("search").value = ""
    fetch(geoUrl + new URLSearchParams(dataParams))
        .then(response => response.json())
        .then(data => {
        getWeatherData(data[0]['lat'], data[0]['lon']);
        })
}
