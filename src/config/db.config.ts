import mongoose from 'mongoose'

export const connectMongoDB = async () => {
  const dbUrl = process.env.DB_URL

  if (!dbUrl) {
    console.error('DB_URL not found in environment variable')
    process.exit(1)
  }

  try {
    const { host, port } = (await mongoose.connect(dbUrl, {})).connection
    console.log(`MongoDB connected on ${host}: ${port}`)
  } catch (err) {
    console.error('MongoDB connection failed')
    console.error(err)
    process.exit(1)
  }
}
