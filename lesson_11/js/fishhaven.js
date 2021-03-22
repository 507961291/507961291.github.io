//Fish Haven Page weather data
 const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=c5cf8b8a6ee5cb33fce30431f6f49c46&units=imperial";

 fetch(weatherAPI)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);

    document.getElementById('weather_desc').textContent =weatherData.weather[0].main;
    document.getElementById('high_temp').textContent = weatherData.main.temp_max;
    document.getElementById('wind_chill').textContent = (windChill(weatherData.main.temp, weatherData.wind.speed)).toFixed(2);
    document.getElementById('humidity').textContent =weatherData.main.humidity;
    document.getElementById('wind_speed').textContent =weatherData.wind.speed;
  })

  function windChill(t, s){
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return f;	
  }

  //5 day forecast  
  //day name for forecast
  const dayName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thur"];
  
  for (let i = 0; i<5; i++){
    let childV = i+1;
    document.querySelector("#dayRow th:nth-child("+childV+")").textContent=dayName[todayDay+i];
  }

  //icon & Temp for forecast
  
  const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=c5cf8b8a6ee5cb33fce30431f6f49c46&units=imperial";
  fetch(forecastAPI)
  .then((response) => response.json())
  .then((forecastData) => { 
    console.log(forecastData);
    var childV = 1;
    var lastCell = document.querySelector("#tempRow td:nth-child(5) first-child");
    console.log(lastCell);
    for (let i=0; i<40; i++) {
    //Only allow data for the 18th hour to pass through
    var dataTime = forecastData.list[i].dt_txt;
    dataTime = dataTime.substring(11,dataTime.length);
    if (dataTime == "18:00:00"){
    // Get Icon from forecast data
    const iconID = forecastData.list[i].weather[0].icon;
    const imageIcon = document.createElement('img');
    imageIcon.src= "http://openweathermap.org/img/wn/"+iconID+".png";
    imageIcon.alt= forecastData.list[0].weather[0].description;
    document.querySelector("#weatherRow td:nth-child("+childV+")").appendChild(imageIcon);
    // Get Temp from forecast data
    const forecastTemp = forecastData.list[i].main.temp;
    document.querySelector("#tempRow td:nth-child("+childV+")").textContent=forecastTemp.toFixed(0)+" ° F";
    childV++;
    if (childV>5){break;}
    }
  }
  })

