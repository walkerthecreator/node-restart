const User = require("../model/User")
const bcrypt = require("bcrypt")

function getSignup(req , res){
    console.log("cookie" , req.cookies)
    res.render('signup')
}

async function postSignup(req , res){
    try{

        const { email , username , password } = req.body
        
    const checkingUser = await User.findOne({ email }) 

    if( checkingUser ){
        res.redirect("login")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)

    const newUser = await User.create({ email , name : username , password : hashedPassword })
        res.cookie("user" , email)
        res.send("welcome " + username)
    }
    catch(err){
        res.send(`something went wrong! ${err}`)
    }
  

    // res.cookie()

    // create a jwt token
    // store it in cookie
    
}

module.exports = { getSignup , postSignup }