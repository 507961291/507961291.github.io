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
    var childV = 1;
    for (let i=0; i<4; i++){
      document.querySelector("#dateRow th:nth-child("+childV+")").textContent = Date(oneCallData.daily[i].dt).substring(3,10);
      document.querySelector("#tempRow td:nth-child("+childV+")").textContent = (oneCallData.daily[i].temp.day).toFixed(0)+" ° F";
      childV++;
    if (childV>3){break;} 
    }



  //   var childV = 1;
  //   for (let i=0; i<40; i++) {
  //     const dataTime = oneCallData.list[i].dt_txt;
  //     // Only allow data for the 18th hour to pass through
  //     const tempData = dataTime.substring(11,dataTime.length);
  //     const tempDate = parseInt(dataTime.substring(8,10));
  //     const tempMonth = parseInt(dataTime.substring(5,7));
  //     const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
  //     const forecastTemp = oneCallData.list[i].main.temp;
    
  //   if (tempData == "18:00:00"){
      
  //     document.getElementById('temperature').textContent= (oneCallData.main.temp).toFixed(0) + "° Fahrenheit";
  //     document.getElementById('description').textContent= oneCallData.weather[0].main;
  //     document.getElementById('humidity').textContent= oneCallData.main.humidity+"% Humidity";

  //     document.querySelector("#dateRow th:nth-child("+childV+")").textContent = monthName[tempMonth]+" "+tempDate;
  //     document.querySelector("#tempRow td:nth-child("+childV+")").textContent = forecastTemp.toFixed(0)+" ° F";
    
  //     //---icon setup
  //     const iconID = oneCallData.list[i].weather[0].icon;
  //     const imageIcon = document.createElement('img');
  //     imageIcon.src = "http://openweathermap.org/img/wn/"+iconID+"@2x.png";
  //     imageIcon.alt = oneCallData.list[0].weather[0].description;
  //     document.getElementById("weatherIconContainer").appendChild(imageIcon);

  //     childV++;
  //   if (childV>3){break;}
  //   }
  // }
  })

// //---Weather API
// const weatherAPI ="https://api.openweathermap.org/data/2.5/weather?id=5460459&appid=686750bcf8739ca1cbd8ab627a2f7e30&units=imperial";

// fetch(weatherAPI)
//   .then((response) => response.json())
//   .then((weatherData)=> {
//     console.log(weatherData);

//     document.getElementById('temperature').textContent= (weatherData.main.temp).toFixed(0) + "° Fahrenheit";
//     document.getElementById('description').textContent=weatherData.weather[0].main;
//     document.getElementById('humidity').textContent=weatherData.main.humidity+"% Humidity";
//     //---icon setup
//     const iconID=weatherData.weather[0].icon;
//     const imageIcon = document.createElement('img');
//     imageIcon.src="http://openweathermap.org/img/wn/"+iconID+"@2x.png";
//     // imageIcon.alt= weatherData.list[0].weather[0].description;
//     document.getElementById("weatherIconContainer").appendChild(imageIcon);
//   })

//   //---3 day forecast    
//   // Date & High Temp for forecast
//   const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5460459&appid=686750bcf8739ca1cbd8ab627a2f7e30&units=imperial";

//   fetch(forecastAPI)
//   .then((response) => response.json())
//   .then((forecastData) => { 
//     console.log(forecastData);
//     var childV = 1;
//     for (let i=0; i<40; i++) {
//       const dataTime = forecastData.list[i].dt_txt;
//       // Only allow data for the 18th hour to pass through
//       const tempData = dataTime.substring(11,dataTime.length);
//       const tempDate = parseInt(dataTime.substring(8,10));
//       const tempMonth = parseInt(dataTime.substring(5,7));
//       const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
//       const forecastTemp = forecastData.list[i].main.temp;
    
//     if (tempData == "18:00:00"){
    
//       document.querySelector("#dateRow th:nth-child("+childV+")").textContent = monthName[tempMonth]+" "+tempDate;
//       document.querySelector("#tempRow t:nth-child("+childV+")").textContent =forecastTemp.toFixed(0)+" ° F";
    
//       childV++;
//       if (childV>3){break;}
//     }
//   }
//   })