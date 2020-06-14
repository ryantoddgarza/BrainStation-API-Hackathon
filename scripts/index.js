// geolocation
//

const success = (pos) => {
    const crd = pos.coords;
    window.onload = getWeather(crd.latitude, crd.longitude);
};

const geoLocator = navigator.geolocation.getCurrentPosition(success);

// weathermap api
//

// get the weather from open weather map api
getWeather = (usrLat, usrLon) => {
  // const key = '84a3db98d0d8c0cf2b5702f8cd8244a8'
  const units = 'metric';
  const lat = usrLat;
  const lon = usrLon;

  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

  axios.get(url)
    .then((response) => {
      const weatherObj = response.data.list[0].main;
      writeWeather(weatherObj);
    })
    .catch(() => console.error(error));
}

// write weather info to the dom
const writeWeather = (weather) => {
  // create a new element
  const newEl = (tag) => {
    return document.createElement(tag);
  };

  const parent = document.getElementById('weather');

  const temp = newEl('p');
    temp.classList.add('weather__temperature');
    temp.innerHTML = `${weather.temp} °C`;
    parent.appendChild(temp);

  const humidity = newEl('p');
    humidity.classList.add('weather__details');
    humidity.innerHTML = `Humidity: ${weather.humidity} %`;
    parent.appendChild(humidity);
}

// Trump
const getTrump = () => {
  const url = 'https://www.tronalddump.io';
  const ext = '/random/quote';
  axios.get(url + ext)
  .then((response) => {
      donQuote(response.data.value)
  })
  .catch(() => console.error (`Could not resolve ${url + ext}`));
}

getTrump();

// write quote
donQuote = (text) => {
  const trump = document.querySelector('.tronaldDump');
  trump.innerText = text;
}

// kanye
const getKanye = () => {
  const url = 'https://api.kanye.rest/'
  axios.get(url)
  .then((response) =>{
      kanyeQuote(response.data.quote);
  })
  .catch(() => console.error (`Could not resolve ${url +ext}`));
}

getKanye();

// write quote
kanyeQuote = (text) => {
  const kanye = document.querySelector('.kanyeWest');
  kanye.innerText = text;
}

