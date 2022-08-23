// Basic types
export interface Pagination {
  limit: number
  offset: number
  count: number
  total: number
}

export interface Departure {
  airport: string
  timezone: string
  iata: string
  icao: string
  terminal?: string
  gate?: string
  delay?: number
  scheduled: string
  estimated: string
  actual?: string
  estimated_runway?: string
  actual_runway?: string
}

export interface Arrival {
  airport: string
  timezone: string
  iata: string
  icao: string
  terminal?: string
  gate?: string
  baggage?: string
  delay?: number
  scheduled: string
  estimated: string
  actual?: string
  estimated_runway?: string
  actual_runway?: string
}

export interface Airline {
  name: string
  iata: string
  icao: string
}

export interface Flight {
  number: string
  iata: string
  icao: string
  codeshared?: Codeshared
}

export interface Codeshared {
  airline_name: string
  airline_iata: string
  airline_icao: string
  flight_number: string
  flight_iata: string
  flight_icao: string
}

// Parent types
export interface Record {
  flight_date: string
  flight_status: string
  departure: Departure
  arrival: Arrival
  airline: Airline
  flight: Flight
  aircraft: any
  live: any
}

export interface FlightsResponse {
  pagination: Pagination
  data: Array<Record>
}

export interface Airport {
  airport_name: string
  iata_code: string
  icao_code: string
  latitude: string
  longitude: string
  geoname_id: string
  timezone: string
  gmt: string
  phone_number?: string
  country_name: string
  country_iso2: string
  city_iata_code: string
}

export interface AirportsResponse {
  pagination: Pagination
  data: Array<Airport>
}

export interface City {
  city_name: string
  iata_code: string
  country_iso2: string
  latitude: string
  longitude: string
  timezone: string
  gmt: string
  geoname_id: string
}

export interface CitiesResponse {
  pagination: Pagination
  data: Array<City>
}

/*
 * @reference: https://aviationstack.com/documentation
 */

export interface Payload {
  access_key: string | undefined
  limit?: number
  offset?: number
  flight_status?:
    | 'scheduled'
    | 'active'
    | 'landed'
    | 'cancelled'
    | 'incident'
    | 'diverted'
  flight_date?: string
  flight_number?: number
  dep_iata?: string
  arr_iata?: string
  airline_name?: string
  starts_with?: string // filter flight numbers based on starts with specific number or string
}
