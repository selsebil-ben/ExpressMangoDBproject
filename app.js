const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.sendFile("./views/home.html", {root : __dirname})
  console.log("I am  a GET API")
})


app.listen(port, () => {
  
  console.log(`http://localhost:${port}/`)
})