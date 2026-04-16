const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,  //dataType
        required:true, //validate
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "UserModel", //file name
    userSchema   //function name
)