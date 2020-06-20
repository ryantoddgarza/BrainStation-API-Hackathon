import React, { Component } from 'react';
import axios from 'axios';

// weathermap api GET
const getWeather = (lat, lon) => {
  const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const units = 'imperial';
  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

  axios.get(url)
    .then((response) => {
      const list = response.data.list[0];
      parseWeather(list);
    })
    .catch((error) => console.error(error));
};

class WeatherClass {
  constructor(list) {
    this.name = list.name;
    this.temp = Math.round(list.main.temp);
    this.max = Math.round(list.main.temp_max);
    this.min = Math.round(list.main.temp_min);
    this.weatherMain = list.weather[0].main;
    this.wind = Math.round(list.wind.speed);
    this.precip = Math.round(list.rain);
    this.humidity = Math.round(list.main.humidity);
    this.feelsLike = Math.round(list.main.feels_like);
    this.pressure = Math.round(list.main.pressure);
  }
  render() {
    return `
      <div class="weather__temperature">
       <div class="weather__name">${this.name}</div>
       <div class="weather__current-temp">${this.temp}°</div>
       <div class="weather__range">
         <div class="weather__max">↑ ${this.max}°</div>
         <div class="weather__min">↓ ${this.min}°</div>
       </div>
      </div>
      <div class="weather__details">
       <div class="weather__weather-main">${this.weatherMain}</div>
       <div class="weather__wind">wind: ${this.wind} mph</div>
       <div class="weather__precip">precip: ${this.precip} in</div>
       <div class="weather__humidity">humidity: ${this.humidity} %</div>
       <div class="weather__feels-like">feels like: ${this.feelsLike}°</div>
       <div class="weather__pressure">pressure: ${this.pressure} mb</div>
      </div>
    `;
  }
}

const parseWeather = (main) => {
  const weatherContainer = document.getElementById('weatherContainer');
  const weather = new WeatherClass(main);
  weatherContainer.innerHTML = weather.render();
};

class Weather extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }
  render() {
    return (
      <section id="weatherContainer" className="container weather">Loading weather data...</section>
    )
  }
}

export default Weather;
