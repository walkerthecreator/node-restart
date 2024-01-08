

function getSignup(req , res){
    res.render('signup')
}

function postSignup(req , res){
    const { email , username , password } = req.body
    console.log("email" , email)
    res.send("welcome " + username)
}

module.exports = { getSignup , postSignup }