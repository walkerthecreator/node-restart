const Blog = require("../model/Blog")


async function getBlogs(req , res){
    const email = req.user.email

    const blogs = await Blog.find().populate("postedBy")
    console.log("blogs available" , blogs)
    return res.render('blogs' , { blog : blogs  })
}


// .select("-phone")

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
    const userId = req.user.id
    const newBlog = await Blog.create({ title , description : desc , category , postedBy : userId })
    res.redirect('/blog')
}

async function getMyBlogs(req , res ){
    const id = req.user.id
    const { email , name } = req.user // coming from req set my middleware
    
    const userBlogs =await  Blog.find({ postedBy : id })
    // return res.send(userBlogs) ;

    return res.render("MyBlogs", { user : { name , email  }  , blogs : userBlogs })

    // const userEmail = await ()
}

module.exports = { getAddNewBlog , postAddNewBlog , getBlogs , deleteBlog , getMyBlogs}