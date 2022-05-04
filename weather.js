


export default function getWeatherData(lat, lon) {
    
    const url = "https://api.openweathermap.org/data/2.5/weather?";
    const units = "metric";
    const appid = "4e026d1d0369716d521ce6646a92a040";
    const dataParams = {"lat":lat,
                    "lon":lon,
                    "appid":appid,
                    "units":units
    }

    fetch(url + new URLSearchParams(dataParams))
        .then(response => response.json())
        //.then(data=>console.log(data));
        .then(data => {
            let temp = data
            document.getElementById("temperature").innerHTML = (temp['main']['temp'] + ' C°');
        });
    

}
