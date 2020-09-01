const express = require(`express`)

const routes = require(`./routes`)

const env = require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.urlencoded( { extended: true } ))
app.use(express.json())

app.use(routes)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))