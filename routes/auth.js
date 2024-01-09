const express = require("express")
const { getSignup , postSignup } = require("../controller/signup")
const { postLogin, getLogin } = require("../controller/login")
const router = express.Router()


router.route('/login').get(getLogin).post(postLogin)
router.route('/signup').get(getSignup).post(postSignup)

module.exports = router