const _info = document.querySelector("#js--pre");
document.querySelector("#js--btn").addEventListener("click", function () {
    const promise = fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19");
    promise
        .then(response => response.json())
        .then(data => {
            _info.innerHTML = `<ul>` +
                `<li>City:${data.name}</li>` +
                `<li>Temp:${data.main.temp}</li>` +
                `<li>Pressure:${data.main.pressure}</li>` +
                `<li>Description:${data.weather[0].description}</li>` +
                `<li>Humidity:${data.main.humidity}</li>` +
                `<li>Wind speed:${data.wind.speed}</li>` +
                `<li>Wind direction:${data.wind.deg}</li>` +
                `<li>Icon:<img alt="" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">` +
                `</ul>`;
        })
})
