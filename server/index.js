require('dotenv').config()

const express = require('express')
const cors = require('cors')
const route = require('./src/routes')
const connectDB = require('./src/config/db/connectDB')

const app = express()

const PORT = process.env.PORT || 5500

connectDB()
app.use(cors())
app.use(express.json())

route(app)

app.listen(PORT, () => console.log(`localhost:${PORT}`))
