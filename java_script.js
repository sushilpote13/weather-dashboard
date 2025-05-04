// Getting the reference of all the parameters
let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");
// Creating the Function here
const getCountryName = (countryCode) => {
    const countryNamesInEnglish = new Intl.DisplayNames([countryCode], { type: 'region' });
    return countryNamesInEnglish.of(countryCode);
};

const covertToDateTimeFormate = (dt) => {
    let curDate = new Date(dt*1000);
    console.log(curDate);
    const option ={
        weekday : "long",
        year : "numeric",
        month : "long",
        day : "numeric",
        hour : "numeric",
        minute : "numeric",
    };
    const dateFormate = new Intl.DateTimeFormat("en-US",option);
    return dateFormate.format(curDate)
};
const defaultCity = "pune";
const getWeatherData = async (city)  => {
    try {    
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=44.34&lon=10.99&appid=8f914e97de991af8c248f1a5dc2f4343`;
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        console.log(data);

        // adding the data that we have get from the api
        cityName.innerHTML = `${data.name}, ${getCountryName(data.sys.country)}`
        dateTime.innerHTML = `${covertToDateTimeFormate(data.dt)}`
        w_forecast.innerHTML = data.weather[0].main;
        w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">`;
        w_temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}&#176C`;
        w_minTem.innerHTML = `Min: ${(data.main.temp_min - 273.15).toFixed(1)}&#176C`;
        w_maxTem.innerHTML = `Max: ${(data.main.temp_max - 273.15).toFixed(1)}&#176C`;
        document.querySelector(".weather_feelslike").innerHTML = `${(data.main.feels_like - 273.15).toFixed(0)}&#176C`;
        document.querySelector(".weather_humidity").innerHTML = `${(data.main.humidity)} g/kg`;
        document.querySelector(".weather_pressure").innerHTML = `${data.main.pressure} pa`;
        document.querySelector(".weather_wind").innerHTML = `${data.wind.speed} m/sec`
    } catch (error) {
        console.log(error);
    }
};

// calling the function before the website page is load 
window.addEventListener("load",getWeatherData(defaultCity));

document.querySelector('.weather-search').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const searchCity = document.getElementById('city_name').value.trim(); 
    if (searchCity) {
        getWeatherData(searchCity); 
    }
    document.getElementById("city_name").value = "";
});