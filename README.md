# plume.js

![APM](https://img.shields.io/apm/l/plume.js?style=flat-square)
![GitHub](https://img.shields.io/github/license/tvast/plume.js?style=flat-square)

```javascript
var app = require('express')();
var http = require('http').createServer(app);

const cors = require('cors')
var express = require('express')

var { token, flightSearch, createOrder, confirmPrice, endpoints } = require('plume')

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);
var tokenAccess= ""
try 
{
  token("SECRET_","ID_").then(function(x){
  var NaseUrl = "URI_ENDPOINT"

try {
  flightSearch(endpoints.searchFlight, NaseUrl,"BKK", "SYD", "2020-03-16", x.access_token).then(function(y){
  console.log(y)
  
try {
  createOrder("https://test.api.amadeus.com",endpoints.createOrder,y.data[2], "a@gmail.com", x.access_token).then(z=>console.log(z))
}
catch(error) {
  console.error(error);
}
})
}
catch(error) {
  console.error(error);
}

}
  ).catch(error=>console.log(error))
} 

catch(error) {
  console.error(error);
}

var server = app.listen(process.env.PORT || 7000,()=>{
  console.log("Howdy, I am running at PORT 7000")

```