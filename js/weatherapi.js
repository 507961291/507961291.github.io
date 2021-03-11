//variable apiURL will store the URL to the api with Preston Ideaho location and my appid assigned by Open Weather Map
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c5cf8b8a6ee5cb33fce30431f6f49c46&units=imperial";
//The data stored at the apiURL will be stored as a json file and called "jsObject" and sent to the console
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //update the temperature on the document
    document.getElementById('current_temp').textContent = jsObject.main.temp;
    //store the current temp icon
    const imgsrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // URL concatenated with Open Weather Map's icon code
    //store the weather conditions description
    const desc = jsObject.weather[0].description;
    //update the elements on the document
    document.getElementById('imagesrc').textContent= imgsrc;
    document.getElementById('icon').setAttribute('src', imgsrc);
    document.getElementById('icon').setAttribute('alt', desc);
});