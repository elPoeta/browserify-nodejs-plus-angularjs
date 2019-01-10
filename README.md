# browserify-nodejs-plus-angularjs
This is a test how to browserify js files to min on nodejs plus angularjs app 

## Install globaly browserify package

    $ npm i -g browserify

## Build app on command line

    $ browserify ./project/app/index.js -o ./project/dist/index.js

## Or add script to package.json
    scripts: {
        "build": "browserify ./project/app/index.js -o ./project/dist/index.js"
       }
    
### And type
    $ npm run build

