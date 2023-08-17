const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const hbs = require('hbs');
const connectToMongo = require('./mongodb');
const signup = require('../models/signup');
connectToMongo();

//It parses incoming JSON requests and puts the parsed data in req. body
app.use(express.json())

//It sets the view engine with hbs file
app.set("view engine","hbs")

//It initializes the path of templates
const templates = path.join(__dirname,'../templates')
//To change the name of views with templates
app.set("views",templates)

//this line will help us to get mongo db data
app.use(express.urlencoded({ extended: false }));

//This files helps us to render the login file and signup file
app.get('/', (req, res) => {
  res.render("login")
})
app.get('/signup', (req, res) => {
  res.render("signup")
})

//It helps to create a local database signups and by using signup schema it stores the value 
app.post("/signup",async(req,res)=>{
    signup.create({
        name : req.body.name,
        password: req.body.password,
    })

    res.render("home");
})

//it helps in searching in database signup and if found we can login 
app.post("/login",async(req,res)=>{
  try {
    const check = await signup.findOne({name:req.body.name});
    if(check.password===req.body.password){
        res.render("home");
    }
    else{
        res.send("wrong password");
    }
  } catch (error) {
    res.send("wrong credentials");
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})