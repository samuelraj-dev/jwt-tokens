// Import Dependencies
import express from 'express'
import 'dotenv/config'
import 'express-async-errors'

// Import Config
import connectDB from './db/connect.js'

// Import MiddleWares
import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'

// Import Routes


// Server Config
const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST

const server = () => {
    app.listen(PORT, HOST, () => {
        console.log(`server running at http://${HOST}:${PORT}/`)
    })
}
connectDB(server)

// Express MiddleWares
app.use(express.static('./public'))
app.use(express.json())

// Routes

// MiddleWares
app.use(errorHandler)
app.use(notFound)