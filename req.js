export let  reqFlightSearch = {
  "currencyCode": "USD",
  "originDestinations": [
    {
      "id": "1",
      "originLocationCode": "RIO",
      "destinationLocationCode": "MAD",
      "departureDateTimeRange": {
        "date": "2020-08-01",
        "time": "10:00:00"
      }
    },
    {
      "id": "2",
      "originLocationCode": "MAD",
      "destinationLocationCode": "RIO",
      "departureDateTimeRange": {
        "date": "2020-08-05",
        "time": "17:00:00"
      }
    }
  ],
  "travelers": [
    {
      "id": "1",
      "travelerType": "ADULT"
    },
    {
      "id": "2",
      "travelerType": "CHILD"
    }
  ],
  "sources": [
    "GDS"
  ],
  "searchCriteria": {
    "maxFlightOffers": 2,
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
      "carrierRestrictions": {
        "excludedCarrierCodes": [
          "AA",
          "TP",
          "AZ"
        ]
      }
    }
  }
}

export let reqflightOFferPricing = {
    "data": {
        "type": "flight-offers-pricing",
        "flightOffers": [
        {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2020-03-01",
            "numberOfBookableSeats": 4,
            "itineraries": [
            {
                "duration": "PT14H10M",
                "segments": [
                {
                    "departure": {
                    "iataCode": "GIG",
                    "at": "2020-03-01T23:30:00"
                    },
                    "arrival": {
                    "iataCode": "CMN",
                    "terminal": "2",
                    "at": "2020-03-02T12:10:00"
                    },
                    "carrierCode": "AT",
                    "number": "212",
                    "aircraft": {
                    "code": "788"
                    },
                    "operating": {
                    "carrierCode": "AT"
                    },
                    "id": "3",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                },
                {
                    "departure": {
                    "iataCode": "CMN",
                    "terminal": "2",
                    "at": "2020-03-02T15:45:00"
                    },
                    "arrival": {
                    "iataCode": "MAD",
                    "terminal": "4S",
                    "at": "2020-03-02T17:40:00"
                    },
                    "carrierCode": "AT",
                    "number": "970",
                    "aircraft": {
                    "code": "73G"
                    },
                    "operating": {
                    "carrierCode": "AT"
                    },
                    "id": "4",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                }
                ]
            },
            {
                "duration": "PT31H20M",
                "segments": [
                {
                    "departure": {
                    "iataCode": "MAD",
                    "terminal": "4S",
                    "at": "2020-03-05T18:40:00"
                    },
                    "arrival": {
                    "iataCode": "CMN",
                    "terminal": "2",
                    "at": "2020-03-05T20:30:00"
                    },
                    "carrierCode": "AT",
                    "number": "971",
                    "aircraft": {
                    "code": "738"
                    },
                    "operating": {
                    "carrierCode": "AT"
                    },
                    "id": "47",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                },
                {
                    "departure": {
                    "iataCode": "CMN",
                    "terminal": "2",
                    "at": "2020-03-06T16:40:00"
                    },
                    "arrival": {
                    "iataCode": "GIG",
                    "at": "2020-03-06T22:00:00"
                    },
                    "carrierCode": "AT",
                    "number": "213",
                    "aircraft": {
                    "code": "788"
                    },
                    "operating": {
                    "carrierCode": "AT"
                    },
                    "id": "48",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                }
                ]
            }
            ],
            "price": {
            "currency": "USD",
            "grandTotal": "2778.98",
            "total": "2778.98",
            "base": "2568.00",
            "fees": [
                {
                "amount": "0.00",
                "type": "SUPPLIER"
                },
                {
                "amount": "0.00",
                "type": "TICKETING"
                }
            ]
            },
            "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
            "AT"
            ],
            "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                "currency": "USD",
                "total": "1625.49",
                "base": "1520.00"
                },
                "fareDetailsBySegment": [
                {
                    "segmentId": "3",
                    "cabin": "BUSINESS",
                    "fareBasis": "DA0R0BRA",
                    "class": "D",
                    "includedCheckedBags": {
                    "quantity": 3
                    }
                },
                {
                    "segmentId": "4",
                    "cabin": "BUSINESS",
                    "fareBasis": "DA0R0BRA",
                    "class": "D",
                    "includedCheckedBags": {
                    "quantity": 3
                    }
                },
                {
                    "segmentId": "47",
                    "cabin": "ECONOMY",
                    "fareBasis": "XL0R0BRA",
                    "class": "X",
                    "includedCheckedBags": {
                    "quantity": 2
                    }
                },
                {
                    "segmentId": "48",
                    "cabin": "ECONOMY",
                    "fareBasis": "XL0R0BRA",
                    "class": "X",
                    "includedCheckedBags": {
                    "quantity": 2
                    }
                }
                ]
            },
            {
                "travelerId": "2",
                "fareOption": "STANDARD",
                "travelerType": "CHILD",
                "price": {
                "currency": "USD",
                "total": "1153.49",
                "base": "1048.00"
                },
                "fareDetailsBySegment": [
                {
                    "segmentId": "3",
                    "cabin": "BUSINESS",
                    "fareBasis": "DA0R0BRACH",
                    "class": "D"
                },
                {
                    "segmentId": "4",
                    "cabin": "BUSINESS",
                    "fareBasis": "DA0R0BRACH",
                    "class": "D"
                },
                {
                    "segmentId": "47",
                    "cabin": "ECONOMY",
                    "fareBasis": "XL0R0BRACH",
                    "class": "X"
                },
                {
                    "segmentId": "48",
                    "cabin": "ECONOMY",
                    "fareBasis": "XL0R0BRACH",
                    "class": "X"
                }
                ]
            }
            ]
        }
        ]
    }
}

export let reqCreateOrder = {
  "data": {
    "type": "flight-order",
    "flightOffers": [You_selected_flight_offer],
      {,
    "travelers": [data_Traveler ],
    "remarks": {
      "general": [
        {
          "subType": "GENERAL_MISCELLANEOUS",
          "text": "ONLINE BOOKING FROM INCREIBLE VIAJES"
        }
      ]
    },
    "ticketingAgreement": {
      "option": "DELAY_TO_CANCEL",
      "delay": "6D"
    },
    "contacts": [
      {
        "addresseeName": {
          "firstName": "PABLO",
          "lastName": "RODRIGUEZ"
        },
        "companyName": "INCREIBLE VIAJES",
        "purpose": "STANDARD",
        "phones": [
          {
            "deviceType": "LANDLINE",
            "countryCallingCode": "34",
            "number": "480080071"
          },
          {
            "deviceType": "MOBILE",
            "countryCallingCode": "33",
            "number": "480080072"
          }
        ],
        "emailAddress": "support@increibleviajes.es",
        "address": {
          "lines": [
            "Calle Prado, 16"
          ],
          "postalCode": "28014",
          "cityName": "Madrid",
          "countryCode": "ES"
        }
      }
    ]
  }
}