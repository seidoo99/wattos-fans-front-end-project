/*
------------------------------------------------------------------

    Purpose
    - Reach out to a Geocoding API to get the longitude and latitude of a given city

------------------------------------------------------------------

    OpenCage Geocoding API Docs
    - https://opencagedata.com/api

    Request Format
    - https://api.opencagedata.com/geocode/version/format?parameters
    - The format component will be replaced with one of the following
        - json
        - geojson
        - xml
        - map
        - google-v3-json

    Request Parameters (view docs for additional parameters)
        - key - API key
        - q - query parameters
        - pretty - more readable formats
    
    Example Request for Carapicuiba, Brasil
    - https://api.opencagedata.com/geocode/v1/json?q=Rua+Cafel%C3%A2ndia%2C+Carapicu%C3%ADba%2C+Brasil&key=YOUR-API-KEY&pretty=1

------------------------------------------------------------------

    Current Issues:
    - Figure out how we want to handle multiple returned results
    - Rendering results to the screen
        - Need a promise for this
    - Return lat/long of current IP

------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function(){
    let cityData = document.getElementById('mainPage').innerHTML = getCityData('Atlanta', 'Georgia', 'US');
    return `
        <div>${cityData}</div>
    `
})

// Pulling in axios for console runs
// const axios = require('axios');

// Declare API key and url for query
// *key will eventually need to be stored in safer place since this is a public repo*
const apiKey = '69355e5ac9ff4d22abfe958f18f4dbaa';
const url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&pretty=1&q=`;

// Variable definitions from the html
// let city = document.getElementById().value;
// let state = document.getElementById().value;

// For now just defining city and state as static variables
/* const city = 'Atlanta';
const state = 'Georgia';
const country = 'US'; */

// Function to call api given city and state
getCityData = (city, state, country) => {
    console.log(`${url}${city}%2C+${state}%2C+${country}`);
    let cityData;
    axios.get(`${url}${city}%2C+${state}%2C+${country}`)
        .then(function(response){
            console.log(response.data.results);
            cityData = JSON.stringify(response.data.results);
        })
        .catch(function(error) {
            console.error(error);
         })
    return cityData;
}


/* let p = new Promise((resolve, reject) => {
    resolve(getCityData('Atlanta', 'Georgia', 'US'));
})

p.then(function (value) {
    console.log('DONE: ', value);
}).catch(function(error) {
    console.log(error);
}) */