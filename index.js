const express = require("express")
const server = express()
const path = require("path")

server.use(express.json())
server.use(express.urlencoded({ extended : false }))

const userData = {
    name : "Arpit" ,
    role : "user" ,
    age : 89 ,
    gender : "Male" ,
}

const users = [
    {
        name : "nitin" , 
        roll : 789 ,
        gender : "male"
    } ,
    {
        name : "aman" , 
        roll : 789 ,
        gender : "female"
    } ,
    {
        name : "akshay" , 
        roll : 789 ,
        gender : "male"
    } ,
    {
        name : "priya" , 
        roll : 789 ,
        gender : "female"
    }]

server.set("view engine" , "ejs")
server.set("views" , path.join(__dirname ,  "/views"))

server.get('/' , (req , res) => {
    res.render("basic" ,  { userData : userData , users } )
})

server.get('/login' , ( req , res )=>{
    res.render('login')
} )

server.post('/login' , (req , res) => {
    console.log(req.body)
    res.send("got it ")
})

const fruits = ["apple" , "mango" , "peas"]

// get method for rendering ejs
server.get('/search', (req , res) => {
    res.render('search')
})


// this is for getting post data from client
server.post('/search' , (req , res)=>{
    let query = req.body.query // this will get value from client input

    let checking = fruits.find(( item )=>{
        return item == query
    })

    if(checking != null){
        return res.send("yes")
    }

    return res.send("no")
})


server.listen(4000 , ()=>{
    console.log('server started on 4000')
})
