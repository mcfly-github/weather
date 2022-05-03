

export function getWeatherData(lat, lon) {

    const url = "https://api.openweathermap.org/data/2.5/weather?";
    const units = "metric";
    const appid = "4e026d1d0369716d521ce6646a92a040";
    const dataParams = {"lat":lat,
                    "lon":lon,
                    "appid":appid,
                    "units":units
    };

    fetch(url + new URLSearchParams(dataParams))
    .then(response => { return response.json()})
    .then(data => jsonData = data)
    .then(() => document.getElementById("temperature").innerHTML = (jsonData['main']['temp'] + ' C°'))

    
    

}