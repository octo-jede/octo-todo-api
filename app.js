require("dotenv").config()
const express = require("express")
const app = express()

const poly = process.env.POLY
app.get("/", function (req, res) {
  res.send(`Hello World! BY ${poly}`)
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
