

// @get
function getLogin( req , res){
        res.render('login')
}

// @post
function postLogin(){
    console.log(req.body)
    res.send("got it ")
}

module.exports = { getLogin , postLogin }