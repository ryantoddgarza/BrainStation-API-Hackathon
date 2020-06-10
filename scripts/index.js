
// weathermap api

getWeather = (usrLat, usrLon) => {
  const key = '84a3db98d0d8c0cf2b5702f8cd8244a8'
  const units = 'metric';
  const lat = usrLat;
  const lon = usrLon;

  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

  axios.get(url)
    .then((response) => {
      console.log(response.data.list[0].main);
    })
    .catch(() => console.error(`Could not resolve ${url}`));
}

// let geoLocator = navigator.geolocation.getCurrentPosition(success, error);

success = (pos) => {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    window.onload = getWeather(crd.latitude, crd.longitude);
};

let geoLocator = navigator.geolocation.getCurrentPosition(success);

// console.log(geoLocator);


// create a new element
const newEl = (tag) => {
  return document.createElement(tag);
}
