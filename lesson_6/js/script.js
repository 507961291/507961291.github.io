
window.onresize = () => {var nav = document.querySelector('nav ul');if (window.innerWidth > 760) nav.classList.remove('.responsive')};

//Font Loader
 WebFont.load({
    google: {
      families: [
         'Raleway', 'Poller One'
      ]
    }
  });

  //Wind Chill calculation
let f = 30; /*current temperature in degrees Fahrenheit*/
let ws = 5; /* windspeed in miles per hour*/
let wc = 35.74 + 0.6215 + f - 35.75 * Math.pow(ws, 0.16) + 0.4275 * f * Math.pow(ws,0.16);
document.getElementById('high_temp').innerText=f.toFixed(1)+"° Fahrenheit";
document.getElementById('wind_chill').innerText= wc.toFixed(1)+"° Fahrenheit";


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