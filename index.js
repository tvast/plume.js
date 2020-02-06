// import {Amadeus} from "./endpoints.js"
// import {fetchApi} from "./fetch.js"
// import {postUrlToken} from "./auth.js"
// const Amadeus =require('endpoints.js')
// const fetchApi =require('fetch.js')
// const postUrlToken =require('auth.js')
const fetch = require('node-fetch');

// export default {Amadeus, fetchApi,postUrlToken} Plume
const uriAuth ="https://test.api.amadeus.com/v1/security/oauth2/token" 


const endpoints = {
  searchFlight:"/v2/shopping/flight-offers",
  flightPrice:"/v2/shopping/flight-offers/pricing",
  createOrder:"/v1/booking/flight-orders",
  citySearch : "/v1/reference-data/locations?"
}

const token = async function postUrlToken(id,secret) {
  // Default options are marked with *
  const response = await fetch(uriAuth, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'   
      'Content-Type': 'application/x-www-form-urlencoded',
     },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: 'grant_type=client_credentials&client_id=' + id + '&client_secret=' + secret// body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

const citySearch = async function getCitySearch(uriApi,NaseUrl,url ,tokenAuth) {
  // returnSearch ="";
  console.log(url)
  // Default options are marked with *
  const response = await fetch(NaseUrl+uriApi+"subType=CITY,AIRPORT"+url , {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'   
      //'Content-Type': ,
      'Content-Type': 'application/x-www-form-urlencoded',authorization: 'Bearer '+tokenAuth
     },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    // body: 
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

// endpoints.flightPrice, NaseUrl,reqFlightSearch, token
const flightSearch =async function fetchApi(uriApi,NaseUrl, departure , arrival , date,token) {

  let request = {
      "currencyCode": "USD",
      "originDestinations": [
      {
        "id": "1",
        "originLocationCode": departure,
        "destinationLocationCode": arrival,
        "departureDateTimeRange": {
          "date": date,
          "time": "10:00:00"
        }
      },
      ],
      "travelers": [
      {
        "id": "1",
        "travelerType": "ADULT",
        "fareOptions": [
        "STANDARD"
        ]
      },
      ],
      "sources": [
      "GDS"
      ],
      "searchCriteria": {
        "maxFlightOffers": 50,
        "flightFilters": {
          "cabinRestrictions": [
          {
            "cabin": "BUSINESS",
            "coverage": "MOST_SEGMENTS",
            "originDestinationIds": [
            "1"
            ]
          }
          ],
        }
      }
    }

    // console.log(NaseUrl+uriApi)

  // Default options are marked with *
  const response = await fetch(NaseUrl+uriApi, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',authorization: 'Bearer '+token
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(request) // body data type must match "Content-Type" header
  });
  // console.log(token)
  return await response.json(); // parses JSON response into native JavaScript objects
}

const flightPrice = async function flifghtPrice(uriApi,NaseUrl,inputFlightOffer, token) {
  // Default options are marked with *
  const response = await fetch(uriApi+NaseUrl, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',authorization: 'Bearer '+token
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(inputFlightOffer) // body data type must match "Content-Type" header
  });

  return await response.json(); // parses JSON response into native JavaScript objects
}

const createOrder =async function createOrder(NaseUrl,uriApi,flightOffer , mail,token) {

  
// console.log(NaseUrl+uriApi)
  // Default options are marked with *
  const response = await fetch(NaseUrl+uriApi, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',authorization: 'Bearer '+token
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(flightOffer) // body data type must match "Content-Type" header
  });
  // console.log(request)
  return await response.json(); // parses JSON response into native JavaScript objects
}

module.exports = {
    token,
    flightSearch, 
    // confirmPrice,
    flightPrice,
    citySearch,
    createOrder,
    endpoints
}