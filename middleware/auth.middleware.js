const getDataFromToken = require("../utils/getDataFromToken")


function verifyLogin(req , res , next ){
    const token = req.cookies.token
    
    if(!token){
        return res.redirect("/auth/signup")
    }

    const decoded = getDataFromToken(token)
    req.user = decoded
    next()
}

module.exports = verifyLogin