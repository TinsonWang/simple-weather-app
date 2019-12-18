//Source: https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d/

// First, require the 'request' package - this is the same as #include in C or import in Python
// The request package is a module that simplifies the code needed to make an HTTP request in NodeJS
let request = require('request');

// To add functionality, require the yargs package - a package that allows variables to be defined from command line
let argv = require('yargs').argv;

// From the OpenWeatherMap documentation, the URL passed into request is http://api.openweathermap.org/data/2.5/weather
// The URL also has two query parameters - ie, key/value pairs that allow us to pass in data to a URL
// These two parameters are: the name of the city being searched for, and the API key

// Note: Query parameters start with a ? question mark.
// They are then indicated with key/value pairs separated by an equal sign.
// Different key/value pairs are separated with an ampersand

// The following variables are TEMPLATE LITERALS. They are enclosed in ` (back tick), NOT ' (single quotation mark)
// city will take the input after the -c flag (since it's defined as argv.c) in the command line
// If the -c flag is not used, it will default to `guelph`
// Note: This flag can change depending on what letter you put after argv._
//  Ex. If argv.f, then use -f flag

let apiKey = `c14c8f06124adcb6d64fdf6aff291861`;
let city = argv.c || `guelph`;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

// Pass in a URL and then request returns a callback function with three arguments: err, response, and body
// Then  check for an error in our request. If there is one, log the error
// If there is no error, log the entire contents of the response body
 request (url, function (err, response, body)
{
    if (err)
    {
        console.log('error:', error);
    }
    else
    {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
        console.log(message);
        //console.log('body:', weather);
    }
});

