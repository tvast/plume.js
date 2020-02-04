import {Amadeus} from "./endpoints.js"
import {fetchApi} from "./fetch.js"
import {postUrlToken} from "./auth.js"

try 
{
postUrlToken("qztkbf5XWjNSGkXRF9bfAwNg6bELWvVD","w9mJ7ZJzlEGNffut").then(x=>console.log(x))
} 

catch(error) {
  console.error(error);
}

// try 
// {
// fetchApi(Amadeus.searchFLight, NaseUrl,reqFlightSearch, token).then(x=>console.log(x))
// } 

// catch(error) {
//   console.error(error);
// }

// try {
// fetchApi(Amadeus.flightPrice, NaseUrl,req, token).then(function(x){
// 	const reqCreateorderConfirmed = Object.assign(reqCreateOrder.data,x.data.flightOffers, dataTraveler)
// 	fetchApi(Amadeus.flightPrice, NaseUrl,reqCreateorderConfirmed, token).then(y=>console.log(y))
// })
// }
// catch(error) {
//   console.error(error);
// }