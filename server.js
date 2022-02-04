const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

const items = require('./routes/items')

const connectDB = require('./config/db')

const app = express()
app.use(express.json())
dotenv.config({ path: './config/config.env' })

// Connect to Mongo Atlas
connectDB()

const PORT = process.env.port
const enviroment = process.env.NODE_ENV

if (enviroment === 'development') app.use(morgan('dev'))

// Routes
app.use('/api/v1/items', items)

app.listen(5000, () =>
  console.log(`Server runing on Port: ${PORT}`.yellow.bold)
)
