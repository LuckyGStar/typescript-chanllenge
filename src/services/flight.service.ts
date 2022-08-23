import {
  Payload,
  Airport,
  City,
  FlightsResponse,
  AirportsResponse,
  CitiesResponse,
} from "../interfaces/flight.interface"
import fetch from 'node-fetch';

const apiRequest = async <T>(payload: Payload, endpoint: string) => {
  const apiUrl = new URL(`${process.env.API_URL}/${endpoint}`)
  for (const [key, value] of Object.entries(payload)) {
    apiUrl.searchParams.append(key, value)
  }
  const request = await fetch(apiUrl)
  const result = await request.json() as T

  return result
}

export const findFlights = async (payload: Payload): Promise<Array<string>> => {
  try {
    const result = await apiRequest<FlightsResponse>(payload, 'flights')

    const flightNumbers = result.data
                            .map(record => record?.flight?.number)
                            .filter(n => n)

    return 'starts_with' in payload
      ? flightNumbers.filter(n => n.charAt(0) === payload['starts_with'])
      : flightNumbers
  } catch (e) {
    throw new Error(`Whoops! API call has been failed!`)
  }
}

export const findAirports = async (payload: Payload): Promise<Array<Airport>> => {
  try {
    const result = await apiRequest<AirportsResponse>(payload, 'airports')
    return result.data
  } catch (e) {
    throw new Error(`Whoops! API call has been failed!`)
  }
}

export const findCities = async (payload: Payload): Promise<Array<City>> => {
  try {
    const result = await apiRequest<CitiesResponse>(payload, 'cities')
    return result.data
  } catch (e) {
    throw new Error(`Whoops! API call has been failed!`)
  }
}
