// geolocation
const success = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  getWeather(lat, lon);
};

const error = () => {
  console.error(error)
};

navigator.geolocation.getCurrentPosition(success, error);

// weathermap api GET
getWeather = (lat, lon) => {
  const key = '84a3db98d0d8c0cf2b5702f8cd8244a8'
  const units = 'imperial';
  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

  axios.get(url)
    .then((response) => {
      const list = response.data.list[0];
      parseWeather(list);
    })
    .catch((error) => console.error(error));
};

class Weather {
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
  const weather = new Weather(main);
  weatherContainer.innerHTML = weather.render();
};

// trump api GET
const getTrump = () => {
  const url = 'https://www.tronalddump.io';
  const ext = '/random/quote';
  axios.get(url + ext)
  .then((response) => {
    document.getElementById('quoteTrump').innerText = response.data.value;
  })
  .catch((error) => console.error (error));
};

// kanye api GET
const getKanye = () => {
  const url = 'https://api.kanye.rest/'
  axios.get(url)
  .then((response) =>{
    document.getElementById('quoteKanye').innerText = response.data.quote;
  })
  .catch((error) => console.error (error));
};

const generateQuotes = () => {
  getTrump();
  getKanye();
};
generateQuotes();

// refresh quotes
document.getElementById('quoteRefreshBtn').addEventListener('click', (event) => {
  generateQuotes();
})

// footer
class FooterContent {
  constructor() {
    this.date = new Date().getFullYear();
  }
  render() {
    return `
      <a href="https://github.com/ryantoddgarza/donyewump"
         title="view on GitHub"
         target="_blank">
        <svg class="icon--footer">
          <use xlink:href="/assets/sprite.svg#github-icon"></use>
        </svg>
      </a>
    `;
  }
}

const foo = document.getElementById('footer');
const footerContent = new FooterContent();
foo.innerHTML = footerContent.render();
