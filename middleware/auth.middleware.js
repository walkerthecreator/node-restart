

function auth(req , res , next ){

    const {user} = req.cookies
// next -> blog
    if( user ){
        console.log("already logged in")
        return res.redirect('/blog')
    }

    next()
}

module.exports = auth