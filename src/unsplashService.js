import service from "./service.js";

import Unsplash from "unsplash-js";

export default class unsplashService extends service {
  constructor() {
    super();
    this.unsplash = new Unsplash({
      applicationId:
        "9e2a6d64ba75f1024dbdca45f8ba3de0fd90043ca33b202fbfd7411deccc7796",
      secret: "efb900c917949540f7e96fce4b3a1d3cf9bfc308b609b4c5a4cff6fb6687563c"
    });
  }

  getRandomPhotoByKeyword(query) {
    const { _applicationId } = this.unsplash;
    const requestUrl = `https://api.unsplash.com/photos/random?query=${query}&client_id=${_applicationId}`;
    return this.getRequest("GET", requestUrl).then(
      response => response.urls.regular
    );
  }
}
