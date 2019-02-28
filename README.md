
## Angular boilerplate code for universal

This repository contains the minimal code from [Angular Universal Course](https://angular-university.io/course/angular-universal-course).


# Installation pre-requisites

IMPORTANT: Please use NPM 5 or above, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/supran2811/boilerplate-universal-angular-firebase.git

Its also possible to install the modules as usual using npm:

    npm install


To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200, but you need to use HTTPS - [https://localhost:4200](https://localhost:4200)

This application uses a self-signed certificate, so you will need to accept it using the browser. If you are using Chrome, you will need to click Advanced and then choose "Proceed to localhost".

To start the application in isomerphic way

    npm run build-app
    npm run start:express-server
 
To deploy the app to firebase 

    First add the project id inside ..firebaserc
    npm run build-and-deploy:prod
