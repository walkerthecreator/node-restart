const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection

db.on("error" , ()=>{
    console.log("error connecting with mongo")
})

db.once("open" , ()=>{
    console.log("connected with mongo")
})