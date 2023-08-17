const mongoose = require('mongoose');

const connectToMongo = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUpTutorial?directConnection=true")
.then(()=>{
    console.log("connection successful!");
})
.catch(()=>{
    console.log("failed connection!");
})
}

module.exports = connectToMongo;