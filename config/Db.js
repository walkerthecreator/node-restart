const mongoose = require("mongoose")

mongoose.connect("uri/database")

const db = mongoose.connection

db.on("error" , ()=>{
    console.log("error connecting with mongo")
})

db.once("open" , ()=>{
    console.log("connected with mongo")
})