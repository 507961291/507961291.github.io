
window.onresize = () => {var nav = document.querySelector('nav ul');if (window.innerWidth > 760) nav.classList.remove('.responsive')};

//Font Loader
 WebFont.load({
    google: {
      families: [
         'Raleway', 'Poller One'
      ]
    }
  });

//current date
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 document.getElementById("current").textContent= new Date().toLocaleDateString("en-US", options);

  // Copyright Year & Find Friday
  let now = new Date();
  let year = now.getFullYear();
  document.getElementById("cYear").textContent= year;
  let dayFriday = now.getDay();
  if (dayFriday==5){
      document.getElementById("banner").style.display="block";
  }

  //Toggle Menu
 function toggleMenu(){
    var nav = document.querySelector('nav ul');
    var menuButton = document.querySelector('.navMenuButton');
    var display = document.querySelector('.responsive');
    nav.classList.toggle('responsive'), false;
    if (display!=null){
        menuButton.innerHTML='<a href="#">&equiv;</a>';
        nav.style.height="0%";
        }
    else {
        menuButton.innerHTML='<a href="#">^</a>';
        nav.style.height="100%";
      }  
 }

 //weather api
 const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5cf8b8a6ee5cb33fce30431f6f49c46&units=imperial";

 fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('weather_desc').textContent =jsObject.weather[0].main;
    document.getElementById('high_temp').textContent = jsObject.main.temp_max;
    document.getElementById('wind_chill').textContent = (windChill(jsObject.main.temp, jsObject.wind.speed)).toFixed(2);
    document.getElementById('humidity').textContent =jsObject.main.humidity;
    document.getElementById('wind_speed').textContent =jsObject.wind.speed;

  })

  function windChill(t, s){
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return f;	
  }

  //5 day forecast
  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5cf8b8a6ee5cb33fce30431f6f49c46&units=imperial";

  fetch(apiURL2)
    .then((response)=> response.json())
    .then((jsObject2)=> {
      console.log(jsObject2);

      
    })