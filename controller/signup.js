const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
       
    const userObj = {
        username :  username ,
        email : email ,
        id : newUser._id
    }

    const token = jwt.sign(userObj , process.env.JWT_SECRET )

    res.cookie("token" , token )
    return res.status(201).redirect('/blog')


    }
    catch(err){
        res.send(`something went wrong! ${err}`)
    }

    
}

module.exports = { getSignup , postSignup }