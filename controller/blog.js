
const arr = []

function getBlogs(req , res){
    res.render('blogs' , { blog : arr })
}


function getAddNewBlog(req , res){
    res.status(200).render('add_new_blog')
}

function postAddNewBlog(req , res){
    const { title , desc } = req.body
    arr.push(req.body)
    res.redirect('/blog')
}

module.exports = { getAddNewBlog , postAddNewBlog , getBlogs}