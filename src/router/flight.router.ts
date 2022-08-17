/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express"
import * as FlightsService from "../services/flight.service"
import { Airport, City } from "../interfaces/flight.interface"

/**
 * Router Definition
 */

export const flightsRouter = express.Router()

/**
 * Controller Definitions
 */

// GET flights
flightsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const query = req.query
    const payload = {
      access_key: process.env.API_KEY,
    }
    const flightNumbers: Array<string> = await FlightsService.findFlights({
      ...query,
      ...payload,
    })
    res.status(200).send(flightNumbers)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else {
      res.status(500).send(`Something went wrong!`)
    }
  }
})

// GET airports
flightsRouter.get("/airports", async (req: Request, res: Response) => {
  try {
    const airports: Array<Airport> = await FlightsService.findAirports()
    res.status(200).send(airports)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else {
      res.status(500).send(`Something went wrong!`)
    }
  }
})

// GET airports
flightsRouter.get("/cities", async (req: Request, res: Response) => {
  try {
    const cities: Array<City> = await FlightsService.findCities()
    res.status(200).send(cities)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else {
      res.status(500).send(`Something went wrong!`)
    }
  }
})
