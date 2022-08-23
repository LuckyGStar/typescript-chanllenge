import express, { Request, Response } from "express"
import * as FlightsService from "../services/flight.service"
import { Airport, City } from "../interfaces/flight.interface"

export const flightsRouter = express.Router()

// GET flights
flightsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const flightNumbers: string[] = await FlightsService.findFlights({
      ...req.query,
      access_key: process.env.API_KEY,
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
    const airports: Airport[] = await FlightsService.findAirports({
      ...req.query,
      access_key: process.env.API_KEY,
    })
    res.status(200).send(airports)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else {
      res.status(500).send(`Something went wrong!`)
    }
  }
})

// GET cities
flightsRouter.get("/cities", async (req: Request, res: Response) => {
  try {
    const cities: City[] = await FlightsService.findCities({
      ...req.query,
      access_key: process.env.API_KEY,
    })
    res.status(200).send(cities)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send(e.message)
    } else {
      res.status(500).send(`Something went wrong!`)
    }
  }
})
