const jwt = require("jsonwebtoken")


function getDataFromToken(token){
    const decoded = jwt.decode(token)
    return decoded 
}


module.exports = getDataFromToken