const apiKey="76877ae9aafe527ff28453407e4fc604";  
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon");
let card = document.querySelector(".card");
const d=new Date();


async function checkWeather(city) {
    let responce= await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await responce.json(); //object form
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML=data.main.humidity + '%';
    document.querySelector(".wind").innerHTML=data.wind.speed + 'km/hr';
    document.querySelector(".date").innerHTML= d.toLocaleDateString();
    document.querySelector(".time").innerHTML= d.toLocaleTimeString();
    document.querySelector(".weather-condition").innerHTML= data.weather[0].main;
    
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
         card.style.backgroundImage = "url('https://i.makeagif.com/media/4-26-2017/eTBCqD.gif')";
    }
    else if(data.weather[0].main=="Clear") {
    weatherIcon.src="images/clear.png"
    card.style.backgroundImage = "url('images/clear Sky.png')";
    }
    else if(data.weather[0].main=="Drizzle") {
    weatherIcon.src="images/drizzle.png"
    card.style.backgroundImage = "url('https://i.pinimg.com/originals/87/eb/d9/87ebd96d079b1737b97f2b3847da9d47.gif')";
    }
    else if(data.weather[0].main=="Mist") {
    weatherIcon.src="images/mist.png"
    card.style.backgroundImage = "url('https://i.pinimg.com/originals/f3/9b/83/f39b8368cac4b9d7a1984a0d7ddca93a.gif')";
    }
    else if(data.weather[0].main=="Rain") {
    weatherIcon.src="images/rain.png"
    card.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2023/02/25/01/14/01-14-55-999_512.gif')";
    }
   else if(data.weather[0].main=="Snow") {
   weatherIcon.src="images/snow.png"
   card.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2023/01/07/00/39/00-39-21-273_512.gif')"
    }        
 else if(data.weather[0].main=="Haze") {
  weatherIcon.src="images/haze.png"
  card.style.backgroundImage = "url('https://i.pinimg.com/originals/5a/0b/bd/5a0bbd41e4bb65be31d5aa750f6d3b77.gif')";
  }
 document.querySelector(".weather").style.display="block";
}

searchBox.addEventListener('keydown', (event)=>{
  if(event.key==="Enter"){
    checkWeather(searchBox.value);
};
});