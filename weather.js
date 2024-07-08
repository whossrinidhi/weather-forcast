const apiKey = "21e6027a0b56f1c2c94aeec34defad62";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const button = document.getElementById("searchbtn");
const inputfield = document.getElementById("searchinp");
async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    if (response.ok) {
      updateWeather(data);
    } else {
      console.log("No such city exists.");
    }
  } catch (error) {
    console.log("error fetching the weather");
  }
}
function updateWeather(data) {
  console.log(data);
  const weatherIcon = document.getElementById("weatherIcon");
  document.getElementById(
    "city"
  ).innerHTML = `${data.name}, ${data.sys.country}`;
  document.getElementById(
    "highlow"
  ).innerHTML = `<span style="color: rgb(116, 105, 182);">H:</span> ${Math.round(
    data.main.temp_max
  )}°C &nbsp; <span style="color: rgb(116, 105, 182);">L:</span> ${Math.round(
    data.main.temp_min
  )}°C`;
  document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.getElementById("desc").innerHTML = data.weather[0].description;
  document.getElementById(
    "wind"
  ).innerHTML = `<span style="color: rgb(116, 105, 182);">Wind Speed:</span> ${data.wind.speed} m/s`;
  weatherIcon.style.display = "block";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "images/wind.png";
  }
}
checkWeather();
button.addEventListener("click", () => {
  checkWeather(inputfield.value);
});
