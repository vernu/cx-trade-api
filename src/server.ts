import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { connectMongoDB } from './config/db.config'
import { tradeRouter } from './trade/routes/trade.route'

(async () => {
  console.log('Starting server...')
  await connectMongoDB()

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use('/api/trade', tradeRouter)

  const PORT = process.env.PORT || 5005
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
  })
})()
