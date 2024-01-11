const express = require("express")
const { getSignup , postSignup } = require("../controller/signup")
const { postLogin, getLogin } = require("../controller/login")
const { handleLogout } = require("../controller/auth.controller")
const router = express.Router()


router.route('/login').get(getLogin).post(postLogin)
router.route('/signup').get(getSignup).post(postSignup)

router.route('/logout').get(handleLogout)

module.exports = router