//password = XTUWIKqhjjCvbivd

const express = require("express");
const mongoose = require("mongoose");

//MongoDB querySrv ECONNREFUSED issue fix
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"])

const app = express();

//Middleware
app.use("/",(req, res) => {
    res.send("It is Working....");
})

mongoose.connect("mongodb+srv://admin:XTUWIKqhjjCvbivd@cluster0.awbtuer.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log((err)));
