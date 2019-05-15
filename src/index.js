import darkskyService from "./darkskyService.js";
import unsplashService from "./unsplashService.js";

document.addEventListener("DOMContentLoaded", function(event) {
  const weather = new darkskyService();
  const unsplash = new unsplashService();

  function setTextInDiv(elementId, text) {
    if (!elementId) {
      return false;
    }
    let element = document.getElementById(elementId);

    if (!element) {
      return false;
    }

    element.innerHTML = text;
  }

  function setBackgroundColor(image) {
    let imageElement = document.getElementById("background-image");
    imageElement.style.backgroundImage = `url("${image}")`;
  }

  function renderDataToTemplate(data) {
    Object.keys(data).forEach(key => {
      setTextInDiv(key, data[key]);
    });
  }

  function init() {
    weather
      .getCurrent()
      .then(currentWeather => {
        renderDataToTemplate(currentWeather);
        return currentWeather.icon;
      })
      .then(weatherStatusIcon => {
        unsplash
          .getPhoto(weatherStatusIcon)
          .then(image => setBackgroundColor(image));
      });
  }

  init();
});
