

// @get
function getLogin( req , res){
        res.render('login')
}

// @post
async function postLogin(){
    const { email , password } = req.body
    const checkingUser  = await User.findOne({ email })
    
    if( ! checkingUser){
        return res.render("signup")
    }

    


}

module.exports = { getLogin , postLogin }