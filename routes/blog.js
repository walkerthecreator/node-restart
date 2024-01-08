const express = require("express")
const { getAddNewBlog, postAddNewBlog, getBlogs } = require("../controller/blog")
const router = express.Router()


router.get("/" , getBlogs)


// @path -> http://localhost:4000/blog/add-new-blog
router.get("/add-new-blog" , getAddNewBlog)
router.post('/add-new-blog' , postAddNewBlog)


// router.route("/add-new-blog").get(getAddNewBlog).post(postAddNewBlog)

module.exports = router