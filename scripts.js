
const searchButton = document.getElementById("SearchBtn");
const weatherContentConainer = document.querySelector("weatherContentContainer");

searchButton.addEventListener("click", getWeather);

async function getWeather(e){
    e.preventDefault();
    const searchBar = document.getElementById("searchBar").value.trim();
    const apiKey = 'fd7019c29121761f9602268492840876';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar}&&units=imperial&appid=${apiKey}`, {mode: 'cors'})
        .then(response => response.json())
        .then(content => {
            let tempvalue = content['main']['temp'];
            weatherContentConainer.innerHTML = tempvalue;
        });
        
        
}
