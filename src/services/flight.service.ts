import {
  Payload,
  Airport,
  City,
  FlightsResponse,
  AirportsResponse,
  CitiesResponse,
} from "../interfaces/flight.interface"
import fetch from 'node-fetch';

/**
 * Service Methods
 */
 
export const findFlights = async (payload: Payload): Promise<Array<string>> => {
  try {
    const apiUrl = new URL(`${process.env.API_URL}/flights`)
    for (const [key, value] of Object.entries(payload)) {
      apiUrl.searchParams.append(key, value)
    }
    const apiRequest = await fetch(apiUrl.href)
    const result = await apiRequest.json() as FlightsResponse
    const flightNumbers = result.data.map(record => record?.flight?.number)
 
    // specific filter with flight number
    if ('starts_with' in payload) {
      return flightNumbers.filter(n => n[0].toString() === payload['starts_with'])
    } else {
      return flightNumbers
    }
  } catch (e) {
    throw new Error('Whoops! API call has been failed!')
  }
}

export const findAirports = async (): Promise<Array<Airport>> => {
  try {
    const apiUrl = process.env.API_URL
    const apiKey = process.env.API_KEY
    const apiRequest = await fetch(`${apiUrl}/airports?access_key=${apiKey}`)
    const result = await apiRequest.json() as AirportsResponse

    return result.data
  } catch (e) {
    throw new Error('Whoops! API call has been failed!')
  }
}

export const findCities = async (): Promise<Array<City>> => {
  try {
    const apiUrl = process.env.API_URL
    const apiKey = process.env.API_KEY
    const apiRequest = await fetch(`${apiUrl}/cities?access_key=${apiKey}`)
    const result = await apiRequest.json() as CitiesResponse

    return result.data
  } catch (e) {
    throw new Error('Whoops! API call has been failed!')
  }
}
