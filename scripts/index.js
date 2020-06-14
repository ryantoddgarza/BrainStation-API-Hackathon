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

// weathermap api
getWeather = (lat, lon) => {
  const key = '84a3db98d0d8c0cf2b5702f8cd8244a8'
  const units = 'imperial';
  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

  axios.get(url)
    .then((response) => {
      const list = response.data.list[0];
      parseWeather(list);
    })
    .catch(() => console.error(error));
};

class Weather {
  constructor(list) {
    this.temp = Math.round(list.main.temp);
    this.max = Math.round(list.main.temp_max);
    this.min = Math.round(list.main.temp_min);
    this.wind = Math.round(list.wind.speed);
    this.precip = Math.round(list.rain);
    this.humidity = Math.round(list.main.humidity);
    this.feelsLike = Math.round(list.main.feels_like);
    this.pressure = Math.round(list.main.pressure);
  }
  render() {
    return `
     <div class="weather__temperature">
       <div class="weather__current-temp">${this.temp}°</div>
       <div class="weather__range">
         <div class="weather__max">↑ ${this.max}°</div>
         <div class="weather__min">↓ ${this.min}°</div>
       </div>
     </div>
     <div class="weather__details">
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
  const weatherContainer = document.getElementById('weather');
  const weather = new Weather(main);
  weatherContainer.innerHTML = weather.render();
};

// quote GET requests
// TODO: This block is a quick fix. Refactor.
const generateQuotes = () => {
  // Trump
  const getTrump = () => {
    const url = 'https://www.tronalddump.io';
    const ext = '/random/quote';
    axios.get(url + ext)
    .then((response) => {
        donQuote(response.data.value)
    })
    .catch(() => console.error (`Could not resolve ${url + ext}`));
  };
  getTrump();

  // write quote
  donQuote = (text) => {
    const trump = document.querySelector('.tronaldDump');
    trump.innerText = text;
  };

  // kanye
  const getKanye = () => {
    const url = 'https://api.kanye.rest/'
    axios.get(url)
    .then((response) =>{
        kanyeQuote(response.data.quote);
    })
    .catch(() => console.error (`Could not resolve ${url +ext}`));
  };
  getKanye();

  // write quote
  kanyeQuote = (text) => {
    const kanye = document.querySelector('.kanyeWest');
    kanye.innerText = text;
  };
};
generateQuotes();

// refresh quotes
document.getElementById('quoteRefreshBtn').addEventListener('click', (event) => {
  generateQuotes();
})

