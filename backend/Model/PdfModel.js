const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pdfSchema = new Schema({
    pdf:{
        type:String,  //dataType
        required:true, //validate
    },
    title:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "PdfDetails", 
    pdfSchema 
)