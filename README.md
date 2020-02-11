# plume.js

![APM](https://img.shields.io/apm/l/plume.js?style=flat-square)
![GitHub](https://img.shields.io/github/license/tvast/plume.js?style=flat-square)

PLume.js is a javascript helper to interact with the Amadeus self service API.IT contain easy to use function that trigger the principal behaviour of the Amadeus for developer API.

## Token

The first function available is 

```javascript
token("secret", "apiKey")
```
it is use asynchronously with this code sample :

```javascript
  
  try 
{//put your id and secret key into it
  token("secret", "apiKey").then(function(tokenAuth){
    // console.log(tokenAuth);
  
   //other function that use the token
	 }
	 )
}
      catch(error) {
      console.error(error);
    }

```
## searchCity

This helper come to simpify the fetch of the api endpoint for the city search API.

It need to be use like this

```javascript
var NaseUrl = "YOUR_API_ENVIRONMENT"
     try {
          citySearch(endpoints.citySearch, NaseUrl, "YOUR SEARCHN STRING", "TOKEN").then(function(y){
          console.log(y)
          returnSearch=y
          res.send(JSON.stringify(y));
          });
        } 

          catch(error) {
          console.error(error);
        }
```

## flightSearch

This function come to quickly help trigger the flight search api. It come like this :

```javascript
var NaseUrl = "YOUR_API_ENVIRONMENT"
	try {
          flightSearch(endpoints.searchFlight, NaseUrl,"YOUR DEPARTURE STRING LIKE 'PAR'", "YOUR ARRIVAL STRIN LIKE 'SYD'", "DATE OF DEPARTURE", "TOKEN").then(function(y){
            res.send(JSON.stringify(y));
          })
        }

      catch(error) {
      console.error(error);
    }
```

## flightPrice

This function get the confirmaion for a price with the flight search selected in input

```javascript
var NaseUrl = "YOUR_API_ENVIRONMENT"
	try {
      flightPrice(NaseUrl,endpoints.flightPrice,inputFlight, "TOKEN").then(function(z) {
        // confirmOrder = z
        res.send(JSON.stringify(z));
        }).catch(function(error) {console.error(error);})
      }
      
      catch(error) {
      console.error(error); 

    }
```

## createOrder

This function come to help the create order process. It take the reauest of an order in input and get back the confirmation code.

```javascript
   try {
      createOrder(NaseUrl,endpoints.createOrder,inputFlightCreateOrder, "MAIL", tokenAuth.access_token).then(function(z) {
        console.log(z);
        res.send(JSON.stringify(z));
        }).catch(function(error) {console.error(error);})
      }
      
      catch(error) {
      console.error(error); 

    }
```

Enjoy and contribute to plume js !

