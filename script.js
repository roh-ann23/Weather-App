
const apikey = '13f329dedfc7b1f2e91e0214e473bc6a&';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".button1");
const weatherImg = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)

    if(response.status == 404){
        document.querySelector('.weather').style.display = 'none'
        document.querySelector('.error').style.display = 'block'
    }
    else{
        var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherImg.src = 'images/clouds.png'
    }
    if(data.weather[0].main == 'Clear'){
        weatherImg.src = 'images/clear.png'
    }
    if(data.weather[0].main == 'Rain'){
        weatherImg.src = 'images/rain.png'
    }
    if(data.weather[0].main == 'Drizzle'){
        weatherImg.src = 'images/drizzle.png'
    }
    if(data.weather[0].main == 'Mist'){
        weatherImg.src = 'images/mist.png'
    }
    if(data.weather[0].main == 'Snow'){
        weatherImg.src = 'images/snow.png'
    }

    
    
    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none'
    }
    
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})
// checkWeather();
