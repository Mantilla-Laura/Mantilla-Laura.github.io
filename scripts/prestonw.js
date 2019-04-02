var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9d69a5a66566118f01e8c7e5bc5fb9e8';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

var forecastRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9d69a5a66566118f01e8c7e5bc5fb9e8';
forecastRequest.open('GET', apiURL, true);
forecastRequest.responseType = 'text';
forecastRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("currently").innerHTML = weatherData.weather[0].description;
    document.getElementById("tValue").innerHTML = Math.round(weatherData.main.temp_max) + "&#176;F";
    document.getElementById("humidity").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("sValue").innerHTML = weatherData.wind.speed + " MPH";
}

forecastRequest.onload = function () {
    var forecastData = JSON.parse(forecastRequest.responseText);
    for (var i = 0; i <= 40; i++) {
        var list = forecastData.list[i];
        var ulList = document.getElementById('daytemp');
        var checkList = list.dt_txt;

        if (checkList.includes('18:00:00')) {
            var listItem = document.createElement('li');
            var articleL = document.createElement('article');
            var icon = document.createElement("img");
            articleL.textContent = Math.round(list.main.temp) + "\u00B0" + "F";
            icon.src = "https://openweathermap.org/img/w/" + list.weather[0].icon + ".png";
            icon.alt = list.weather[0].description;
            articleL.appendChild(icon);
            listItem.appendChild(articleL);
            ulList.appendChild(listItem);
        }

    }
}