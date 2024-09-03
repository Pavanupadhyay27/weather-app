async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'c3d82a57b97144099b57b63502d114f5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        console.log(response)
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerText = 'Error: ' + error.message;
    }
}

function displayWeather(data) {
    const weatherResult = `
        City: ${data.name}
        Temperature: ${data.main.temp}°C
        Weather: ${data.weather[0].description}
    `;
    document.getElementById('weather-result').innerText = weatherResult;
}
