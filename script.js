document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const city = document.getElementById('cityInput').value;
    const apiKey = '6efbcd0d461148e4bc0142056240709';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    // Fetch weather data from API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found'); // Trigger error for invalid city
            }
            return response.json();
        })
        .then(data => {
            // Update weather details with the correct data structure
            document.getElementById('cityName').textContent = data.location.name;
            document.getElementById('temperature').textContent = data.current.temp_c;
            document.getElementById('description').textContent = data.current.condition.text;
            document.getElementById('humidity').textContent = data.current.humidity;
            document.getElementById('wind').textContent = data.current.wind_kph;

            // Display weather details and hide error
            document.getElementById('weatherDetails').classList.remove('hidden');
            document.getElementById('error').classList.add('hidden');
        })
        .catch(error => {
            // Show error if city is not found
            document.getElementById('error').textContent = error.message;
            document.getElementById('error').classList.remove('hidden');
            document.getElementById('weatherDetails').classList.add('hidden');
        });
});
//@vishal