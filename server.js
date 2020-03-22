const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 8080

const app = express()

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://NIck:Nick9245@ds121603.mlab.com:21603/heroku_qdqtzbst", { useMongoClient: true })


app.use(require("./routes/apiroutes.js"))
app.use(require("./routes/htmlroutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})
