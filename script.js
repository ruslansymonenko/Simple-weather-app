const cityContainer = document.querySelector('#city');
const weatherIconContainer = document.querySelector('#weatherIcon');
const temperatureContainer = document.querySelector('#temperature');
const weatherDesriptionContainer = document.querySelector('#weatherDesription');
const feelsLikeContainer = document.querySelector('#feelsLike');

const windValueContainer = document.querySelector('#windValue');
const humidityValueContainer = document.querySelector('#humidityValue');
const precipValueContainer = document.querySelector('#precipValue');


function addCity (data, element) {
    let currentCity = data.location.name;
    element.innerText = currentCity
}

function addIcon (data, element) {
    let currentIcon = 'https:' + data.current.condition.icon;
    let icon = document.createElement('img');
    icon.setAttribute('src', currentIcon);
    icon.setAttribute('class', 'icon')
    element.appendChild(icon);
}

function addTemperature (data, element) {
    let currentTemperature = data.current.temp_c + ' C';
    element.innerText = currentTemperature;
}

function addWeatherDecription (data, element) {
    let currentDescription = data.current.condition.text;
    element.innerText = currentDescription;
}


function addExtraInfo (data, container1, container2, container3) {
    let windPower = data.current.wind_kph;
    let windDirection = data.current.wind_dir;
    let wind = windPower + ' km/h ' + windDirection;
    
    let humidity = data.current.humidity + ' g/m';
    let precip = data.current.precip_mm + ' mm';

    container1.innerText = wind;
    container2.innerText = humidity;
    container3.innerText = precip;
}


fetch('http://api.weatherapi.com/v1/current.json?key=871d5f2d8cec481b898202849222605&q=London&aqi=no')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        addCity(data, cityContainer);
        addTemperature(data, temperatureContainer);
        addIcon(data, weatherIconContainer);
        addWeatherDecription(data, weatherDesriptionContainer);
        addExtraInfo(data, windValueContainer, humidityValueContainer, precipValueContainer);
        console.log(data);
    })