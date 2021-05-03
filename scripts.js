const tempUnitBtns = document.getElementById("toggleTemptureUnits");
const searchButton = document.getElementById("SearchBtn");
const weatherContainer = document.querySelector(".weatherContainer");
searchButton.addEventListener("click", getWeather);

async function getWeather(e){
    e.preventDefault();
    const searchBar = document.getElementById("searchBar").value.trim();
    const apiKey = 'fd7019c29121761f9602268492840876';
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar}&&units=imperial&appid=${apiKey}`, {mode: 'cors'})
        const weatherData = await response.json();
        console.log(weatherData);
        const temp = weatherData.main.temp;
        const feelsLikeTemp = weatherData.main.feels_like;
        const cityName = weatherData.name;
        const country = weatherData.sys.country;
        const weatherDescription = weatherData.weather[0].description;
        const weather = weatherData.weather[0].main;
        const icon = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherData.weather[0]["icon"]}.svg">`;
        const weatherReportContentCard = document.createElement("div"); weatherReportContentCard.classList.add("weatherReportContentCard");
        weatherReportContentCard.innerHTML = `
        <div class="displayWeather">
            <h2 class="cityName">${cityName}</h2>
            <h2 class="country">${country}</h2>
            <p class="icon">${icon}</p>
            <p class="temp">${Math.round(temp)}F</p>
            <p class="feelsLikeTemp">Feels like ${Math.round(feelsLikeTemp)}F</p>
            <h2 class="weather">${weather}</h2>
            <h2 class="weatherDescription">${weatherDescription}</h2>
            </div>`;
        weatherContainer.appendChild(weatherReportContentCard);
        
    }catch(err){
        err=alert("Im sorry we couldn't get you weather data")
    }
        
}
