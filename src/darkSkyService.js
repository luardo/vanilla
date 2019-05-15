export default class darkskyService {
  constructor() {
    this.proxy = "https://cors-anywhere.herokuapp.com/";
    this.baseUrl = "https://api.darksky.net/forecast/";
    this.key = "2531b31fcac013a100c0bbf4eb586d5f";
    this.coordinates = "52.5200,-13.4050";

    this.city = null;
    this.temperature = null;
    this.summary = null;
  }

  getRequest() {
    return new Promise(
      function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          this.proxy +
            this.baseUrl +
            this.key +
            "/" +
            this.coordinates +
            "/?units=si"
        );
        xhr.onload = function() {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function() {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.responseType = "json";
        xhr.send();
      }.bind(this)
    );
  }

  getDate(timestamp) {
    const currentDate = new Date(timestamp * 1000);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return day + "/" + month + "/" + year;
  }

  getCurrent() {
    return this.getRequest().then(({ currently, daily }) => {
      return {
        temperature: Math.round(currently.temperature) + "°",
        city: "Berlixn",
        icon: currently.icon,
        dateTime: this.getDate(currently.time),
        warning: daily.summary,
        wind: currently.windSpeed,
        humidity: currently.humidity + "%"
      };
    });
  }
}
