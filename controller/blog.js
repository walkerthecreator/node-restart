const Blog = require("../model/Blog")


async function getBlogs(req , res){
    const blogs = await Blog.find()
    res.render('blogs' , { blog : blogs })
}

async function deleteBlog(req , res){
    const id = req.params.id
    const Blogstatus = await Blog.deleteOne({ _id : id })
    res.redirect('/blog')
}

function getAddNewBlog(req , res){
    res.status(200).render('add_new_blog')
}

async function postAddNewBlog(req , res){
    const { title , desc , category } = req.body
    const newBlog = await Blog.create({ title , description : desc , category })
    res.redirect('/blog')
}

module.exports = { getAddNewBlog , postAddNewBlog , getBlogs , deleteBlog}