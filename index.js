document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'e1ae58e60066ef5b9c2a240a07133c3d';
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
    const weatherDisplay = document.getElementById('weather-display');
    const locationInput = document.getElementById('location');
    const unitSelect = document.getElementById('unit');
    const getWeatherButton = document.getElementById('get-weather');

    getWeatherButton.addEventListener('click', function () {
        const location = locationInput.value;
        const unit = unitSelect.value;

        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                
                weatherDisplay.innerHTML = `
                    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°${unit === 'imperial' ? 'F' : 'C'}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                    <p>Description: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                
                weatherDisplay.innerHTML = `<p class="error">Error: ${error.message}</p>`;
            });
    });
});
