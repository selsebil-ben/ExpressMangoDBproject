const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
const port = 3001;
const uri = "mongodb+srv://salsa:salsa@cluster0.mtjwq.mongodb.net/UserManagement?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.urlencoded({extended : true}));
app.use(express.json());

// git bash path : cd /c/Users/Selsebil/Desktop/my-github/ExpressMangoDB

mongoose.connect(uri)
.then( () => {console.log("Database successfuly conencted !")})
.catch( (Error) => {console.log(Error)});

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", {root : __dirname})
  console.log("Starting page")
})

app.post("/adduser", (req, res) => {
  console.log(req.body);
  const name = new User(req.body);
  name.save()
  .then( () => { res.redirect("/success") })
  .catch( (er) => {console.log(er)});
   
})

app.get('/success', (req, res) => {
  // res.sendFile("./views/home.html", {root : __dirname})
  res.send("Username added succefully :D")
})

app.listen(port, () => {
  
  console.log(`http://localhost:${port}/`)
});