// let geoLocator = navigator.geolocation.getCurrentPosition(success, error);

success = (pos) => {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
};

let geoLocator = navigator.geolocation.getCurrentPosition(success);
// console.log(geoLocator);
