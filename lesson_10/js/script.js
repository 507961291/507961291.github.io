
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