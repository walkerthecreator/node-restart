const express = require("express")
const { getLogin , postLogin } = require("../controller/login")
const router = express.Router()

// path = localhost:4000/login/
router.get('/' , getLogin )

// path = localhost:4000/login/
router.post('/' , postLogin)

module.exports = router