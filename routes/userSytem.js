const express = require('express')
const router = express.Router()
const registerRouter = require('./usres/register')
const loginRouter = require('./usres/login')
const findRouter = require('./usres/find')
const middleWareRouter= require("../middleware/authMiddleware")

router.use("/register", registerRouter)
router.use("/login", loginRouter)
router.use("/find", middleWareRouter, findRouter)

module.exports = router