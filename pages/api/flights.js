export default function handler(req, res) {
  // Enable CORS so anyone can use your API
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')

  const flightData = [
    {
      "flightCode": "CN13685",
      "departureDate": "2023-06-26", 
      "departureTime": "04:13",
      "arrivalDate": "2023-06-28",
      "arrivalTime": "02:12",
      "departureAirport": "VBN",
      "arrivalAirport": "YYL", 
      "availableSeats": 221,
      "ticketPrice": 171,
      "airlineCode": "504",
      "airlineName": "Air Atlantic Uruguay",
      "aircraftType": "consequuntur"
    },
    {
      "flightCode": "DL24891",
      "departureDate": "2023-06-27",
      "departureTime": "14:30", 
      "arrivalDate": "2023-06-27",
      "arrivalTime": "18:45",
      "departureAirport": "JFK",
      "arrivalAirport": "LAX",
      "availableSeats": 156,
      "ticketPrice": 299,
      "airlineCode": "DL",
      "airlineName": "Delta Air Lines", 
      "aircraftType": "Boeing 737"
    },
    {
      "flightCode": "AA15234",
      "departureDate": "2023-06-28",
      "departureTime": "09:15",
      "arrivalDate": "2023-06-28", 
      "arrivalTime": "12:30",
      "departureAirport": "ORD",
      "arrivalAirport": "MIA",
      "availableSeats": 89,
      "ticketPrice": 245,
      "airlineCode": "AA",
      "airlineName": "American Airlines",
      "aircraftType": "Airbus A320"
    }
  ]

  res.status(200).json(flightData)
}
