const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regiSchema = new Schema({
    name:{
        type:String,  //dataType
        required:true, //validate
    },
    gmail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "Register", 
    regiSchema 
)