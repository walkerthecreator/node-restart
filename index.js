const express = require("express")
const server = express()
const path = require("path")
const dotenv = require("dotenv").config()
const port  =  process.env.PORT || 5000
const db = require("./config/Db")
const cookieParser = require("cookie-parser")
const verifyLogin =  require("./middleware/auth.middleware")


server.use(express.json())
server.use(express.urlencoded({ extended : false }))
server.use(cookieParser())

server.set("view engine" , "ejs")
server.set("views" , path.join(__dirname ,  "/views"))

// serving static files
server.use(express.static(path.join(__dirname , "/public")))


server.get('/' , (req , res) => {
    // res.render("basic" ,  { )
    res.render("basic")
})

server.use('/auth' , require('./routes/auth'))

// blog
server.use('/blog' , verifyLogin ,  require("./routes/blog"))


server.listen(port , ()=>{
    console.log(`server started on ${port}`)
})
