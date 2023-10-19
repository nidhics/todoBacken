require('dotenv').config();//use for --> env variable
const express = require("express")
const router = express.Router()
const routes = require('./routes/routes')
const urlPort = process.env.URL_PORT || 6010
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json());//to use json data
routes(router)
app.use('/', router)

app.listen(urlPort, () => {
    console.log("listening on:" + urlPort);
})
