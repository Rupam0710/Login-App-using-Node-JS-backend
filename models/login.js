const mongoose = require('mongoose');
const {Schema} = mongoose;

const LoginSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true,
    },
    
    
})

module.exports = mongoose.model('login',LoginSchema);