const express = require("express")
const { getAddNewBlog, postAddNewBlog, getBlogs , deleteBlog } = require("../controller/blog")
const router = express.Router()


router.get("/" , getBlogs)



router.get("/add-new-blog" , getAddNewBlog)
router.post('/add-new-blog' , postAddNewBlog)

// router.get('/myblogs' , getMyBlogs )


router.get("/delete/:id" , deleteBlog)



// router.route("/add-new-blog").get(getAddNewBlog).post(postAddNewBlog)

module.exports = router