const express = require("express")
const { getSignup, postSignup } = require("../controller/signup")
const router = express.Router()


router.get('/' , getSignup)
router.post('/' , postSignup)

module.exports = router