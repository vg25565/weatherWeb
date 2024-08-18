const button = document.getElementById("search");
const input = document.getElementById("city-input");
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityname) {
    const ans = await fetch(`http://api.weatherapi.com/v1/current.json?key=4a00b16c8ded44efab4103521241808&q=${cityname}&aqi=yes`);
    return await ans.json();
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);

    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;

    cityTime.innerText = `Local Time: ${result.location.localtime}`;
    cityTemp.innerText = `Temperature: ${result.current.temp_c}°C - ${result.current.condition.text}`;
});
