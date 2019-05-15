import Unsplash from "unsplash-js";

export default class unsplashService {
  constructor() {
    this.unsplash = new Unsplash({
      applicationId:
        "9e2a6d64ba75f1024dbdca45f8ba3de0fd90043ca33b202fbfd7411deccc7796",
      secret: "efb900c917949540f7e96fce4b3a1d3cf9bfc308b609b4c5a4cff6fb6687563c"
    });
  }

  getPhoto(query) {
    const { _applicationId } = this.unsplash;

    return new Promise(
      function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          `https://api.unsplash.com/photos/random?query=${query}&client_id=${_applicationId}`
        );
        xhr.onload = function() {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response.urls.regular);
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
}
