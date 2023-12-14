import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { connectMongoDB } from './config/db.config'


;(async () => {
  console.log('Starting server...')
  const mongooseDb = await connectMongoDB()

  const app = express()
  app.use(cors())
  app.use(express.json())

  const PORT = process.env.PORT || 5003
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
  })
})()
