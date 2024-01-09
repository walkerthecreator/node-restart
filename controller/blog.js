const Blog = require("../model/Blog")


async function getBlogs(req , res){
    const user = req.cookies.user
    if(user){
        const blogs = await Blog.find()
        return res.render('blogs' , { blog : blogs })
    }
    else{
        res.redirect('/auth/signup')
    }
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