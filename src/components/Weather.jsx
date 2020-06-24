import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  state = {
    list: []
  }

  getWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
      const units = 'imperial';
      const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

      axios.get(url)
        .then((res) => {
          this.setState({list: res.data.list});
        })
        .catch((err) => console.error(err));
    });
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    if (this.state.list.length === 0) {
      return (
        <section id="weatherContainer" className="container weather">
          Loading weather data...
        </section>
      )
    } else {
      const list = this.state.list[0];
      const name = list.name;
      const temp = Math.round(list.main.temp);
      const max = Math.round(list.main.temp_max);
      const min = Math.round(list.main.temp_min);
      const weatherMain = list.weather[0].main;
      const wind = Math.round(list.wind.speed);
      const precip = Math.round(list.rain);
      const humidity = Math.round(list.main.humidity);
      const feelsLike = Math.round(list.main.feels_like);
      const pressure = Math.round(list.main.pressure);

      return (
        <section id="weatherContainer" className="container weather">
          <div className="weather__temperature">
           <div className="weather__name">{name}</div>
           <div className="weather__current-temp">{temp}°</div>
           <div className="weather__range">
             <div className="weather__max">↑ {max}°</div>
             <div className="weather__min">↓ {min}°</div>
           </div>
          </div>
          <div className="weather__details">
           <div className="weather__weather-main">{weatherMain}</div>
           <div className="weather__wind">wind: {wind} mph</div>
           <div className="weather__precip">precip: {precip} in</div>
           <div className="weather__humidity">humidity: {humidity} %</div>
           <div className="weather__feels-like">feels like: {feelsLike}°</div>
           <div className="weather__pressure">pressure: {pressure} mb</div>
          </div>
        </section>
      )
    }
  }
}

export default Weather;

