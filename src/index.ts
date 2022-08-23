import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { flightsRouter } from './router/flight.router'
import { errorHandler } from './middleware/error.middleware'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api/flights', flightsRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
