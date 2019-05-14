import WeatherService from "./services.js";

document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.createElement("h1");
  document.body.appendChild(element);
  const weather = new WeatherService();

  function setTextInDiv(elementId, text) {
    let element = document.getElementById(elementId);
    element.innerHTML = text;
  }

  function init() {
    weather.getCurrent().then(currentWeather => {
      setTextInDiv("city", currentWeather.city);
      setTextInDiv("date", currentWeather.dateTime);
      setTextInDiv("current", currentWeather.temperature);
      setTextInDiv("summary", currentWeather.summary);
      setTextInDiv("warning", currentWeather.warning);
    });
  }

  init();
});
