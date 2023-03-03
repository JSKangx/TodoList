const onGeoSuccess = async function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const res = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=f6a99bcfcd4fe7af97965336f74de0e7`
  );
  console.log(res);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
};

function onGeoFailed() {
  alert("I CAN'T GET CURRENT LOCATION FOR SOME REASON!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed);
