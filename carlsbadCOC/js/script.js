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

//---oneCall API
const oneCallAPI="https://api.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=-117.3506&appid=686750bcf8739ca1cbd8ab627a2f7e30&units=imperial";
fetch(oneCallAPI)
  .then((response)=> response.json())
  .then((oneCallData)=> {
    console.log(oneCallData);
    document.getElementById('temperature').textContent= (oneCallData.current.temp).toFixed(0) + "° Fahrenheit";
    document.getElementById('description').textContent= oneCallData.current.weather[0].description;
    document.getElementById('humidity').textContent= oneCallData.current.humidity+"% Humidity";
    
    //---icon setup
    const iconID = oneCallData.current.weather[0].icon;
    const imageIcon = document.createElement('img');
    imageIcon.src = "http://openweathermap.org/img/wn/"+iconID+"@2x.png";
    imageIcon.alt = oneCallData.current.weather[0].description;
    document.getElementById("weatherIconContainer").appendChild(imageIcon);

    //---Date
    for (let i=0; i<3; i++){
      let childV=i+1;
      let forecastDate = new Date(oneCallData.daily[i].dt*1000).toDateString();
      let forecastTemp = oneCallData.daily[i].temp.max;
      document.querySelector("#dateRow th:nth-child("+childV+")").textContent = forecastDate.substring(0,10);
      document.querySelector("#tempRow td:nth-child("+childV+")").textContent = forecastTemp.toFixed(0)+" ° F";   
      childV++;
    }
  })