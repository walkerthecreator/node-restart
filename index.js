const express = require("express")
const server = express()
const path = require("path")
const dotenv = require("dotenv").config()
const port  =  process.env.PORT || 5000


server.use(express.json())
server.use(express.urlencoded({ extended : false }))


server.set("view engine" , "ejs")
server.set("views" , path.join(__dirname ,  "/views"))

// serving static files
server.use(express.static(path.join(__dirname , "/public")))


server.get('/' , (req , res) => {
    // res.render("basic" ,  { )
    res.render("basic")
})

server.use('/login' , require('./routes/login'))
server.use('/signup' ,  require('./routes/signup'))


// blog
server.use('/blog' , require("./routes/blog"))


server.listen(port , ()=>{
    console.log(`server started on ${port}`)
})
