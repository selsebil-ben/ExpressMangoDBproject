require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
const port = 3001;
const dbString = process.env.DATABASE_URL;


app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set('view engine','ejs');



mongoose.connect(dbString)
.then( () => {console.log("Database successfuly conencted !")})
.catch( (Error) => {console.log(Error)});

app.get('/', (req, res) => {
  //res.sendFile("./views/home.html", {root : __dirname})
  res.render("home", {title: "Home page"})
  
})

app.post("/adduser", (req, res) => {
  console.log(req.body);
  const name = new User(req.body);
  name.save()
  .then( () => { res.redirect("/success") })
  .catch( (er) => {console.log(er)});
   
})

app.get('/success', (req, res) => {
  
  res.send("Username added succefully :D")
})

app.listen(port, () => {
  
  console.log(`http://localhost:${port}/`)
});