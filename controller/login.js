const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../model/User")
// @get
function getLogin( req , res){
        res.render('login')
}

// @post
async function postLogin(req , res){
    const { email , password } = req.body
    const checkingUser  = await User.findOne({ email })
    
    if( ! checkingUser){
        return res.render("signup")
    }

    const checkPassword = await bcrypt.compare(password , checkingUser.password )

    if(!checkPassword){
        return res.redirect("login")
    }

    const obj = {
        email : email ,
        id : checkingUser._id ,
        name : checkingUser.name
    }

    const token = jwt.sign(obj , process.env.JWT_SECRET)

    res.cookie("token" , token )
    return res.redirect("/blog")
}

module.exports = { getLogin , postLogin }