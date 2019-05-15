# Weather app

This is a ES6 simple weather app using API from darksky and unsplash

stack used:

* babel for transpiling ES6
* node-sass for running Sass
* webpack
* simple express server

Given some coordinates we fetch the data of the current weather from the api. Using one of the properties "icon" we fetch a background using that keyword from unsplash to make the app a bit nicer.

The application is ment to be mobile first, in this case mobile only. It's not responsive but it should look nice in devices of maxwidth of 640.

##how to use
run

npm i

npm run dev
