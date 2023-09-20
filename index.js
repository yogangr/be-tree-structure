const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const router = require("./routes")

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(router)

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})