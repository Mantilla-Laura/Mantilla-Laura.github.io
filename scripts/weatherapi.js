let weatherRequest = new XMLHttpRequest();

weatherRequest.onload =  function () {
var apiURLstring = api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9d69a5a66566118f01e8c7e5bc5fb9e8;
weatherRequest = ('GET', apiURLstring, async=true);
weatherRequest.send();
weatherData = JSON.parse(weatherRequest.responseText);

document.write("current-temp").innerHTML=weatherData.lon;
}
console.log(weatherData);



