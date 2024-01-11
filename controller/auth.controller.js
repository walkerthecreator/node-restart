

function handleLogout(req , res ){
    try{
        req.user = ""
        res.cookie("token", "")
        return res.redirect('/auth/login')
    }
    catch(err){
        console.log("soomething went wrong" + err)
    }
}

module.exports = { handleLogout }



