const cityContainer = document.querySelector('#city');
const weatherIconContainer = document.querySelector('#weatherIcon');
const temperatureContainer = document.querySelector('#temperature');
const weatherDesriptionContainer = document.querySelector('#weatherDesription');
const extraInfoList = document.querySelector('#extraInfo');
const feelsLikeContainer = document.querySelector('#feelsLike');


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



fetch('http://api.weatherapi.com/v1/current.json?key=871d5f2d8cec481b898202849222605&q=London&aqi=no')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        addCity(data, cityContainer);
        addTemperature(data, temperatureContainer);
        addIcon(data, weatherIconContainer);
        addWeatherDecription(data, weatherDesriptionContainer);
        console.log(data);
    })