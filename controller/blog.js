const Blog = require("../model/Blog")


async function getBlogs(req , res){
    const blogs = await Blog.find()
    res.render('blogs' , { blog : blogs })
}


function getAddNewBlog(req , res){
    res.status(200).render('add_new_blog')
}

async function postAddNewBlog(req , res){
    const { title , desc , category } = req.body
    const newBlog = await Blog.create({ title , description : desc , category })
    res.redirect('/blog')
}

module.exports = { getAddNewBlog , postAddNewBlog , getBlogs}