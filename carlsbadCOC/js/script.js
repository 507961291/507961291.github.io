WebFont.load({
    google: {
      families: [
        'Lobster', 'Exo'
      ]
    }
  });

/* Copyright Year
const now = new Date();
const year = now.getFullYear();
document.getElementById("cYear").textContent= year;
const todayDay = now.getDay();
*/

//Toggle Menu
function toggleMenu(){
var nav = document.querySelector('nav ul');
var display = document.querySelector('.responsive');
nav.classList.toggle('responsive'), false;
}

//---Weather API---
const weatherAPI ="https://api.openweathermap.org/data/2.5/weather?id=5460459&appid=686750bcf8739ca1cbd8ab627a2f7e30&units=imperial";

fetch(weatherAPI)
  .then((response) => response.json())
  .then((weatherData)=> {
    console.log(weatherData);

    document.getElementById('temperature').textContent= (weatherData.main.temp).toFixed(0) + "° Fahrenheit";
    document.getElementById('description').textContent=weatherData.weather[0].main;
    document.getElementById('humidity').textContent=weatherData.main.humidity+"% Humidity";
    //---icon setup---
    const iconID=weatherData.weather[0].icon;
    const imageIcon = document.createElement('img');
    imageIcon.src="http://openweathermap.org/img/wn/"+iconID+"@2x.png";
    // imageIcon.alt= weatherData.list[0].weather[0].description;
    document.getElementById("weatherIconContainer").appendChild(imageIcon);
  })