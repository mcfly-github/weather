import { getWeatherData } from './weather.js';


export function searchCity() {

    let jsonData;
    let choosenCity = document.getElementById("city").value
    const geoUrl = "http://api.openweathermap.org/geo/1.0/direct?";
    const appid = "4e026d1d0369716d521ce6646a92a040"
    const dataParams = {

        "q":choosenCity,
        "appid":appid

    }


    fetch(geoUrl + new URLSearchParams(dataParams))
        .then(response => response.json())
        .then(data => jsonData = data)
        .then(() => console.log(jsonData));



    //.then(() => document.getElementById("temperature").innerHTML = (jsonData['main']['temp'] + ' C°'))
    //console.log(choosenCity)
}