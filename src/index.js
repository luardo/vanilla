import darkskyService from "./darkskyService.js";
import unsplashService from "./unsplashService.js";

document.addEventListener("DOMContentLoaded", function(event) {
  const weather = new darkskyService();
  const unsplash = new unsplashService();

  function setTextInDiv(elementId, text) {
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
      .getWeather()
      .then(weather => {
        renderDataToTemplate(weather);
        return unsplash.getRandomPhotoByKeyword(weather.icon);
      })
      .catch(e => {
        console.log("failed to fetch the data. Error:" + e);
      })
      .then(image => setBackgroundColor(image))
      .catch(e => {
        console.log("failed to fetch the unsplash image. Error:" + e);
      });
  }

  init();
});
