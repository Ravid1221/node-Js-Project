const express = require('express')
const router = express.Router()
const newCardRouter = require('./cards/new')
const middleWareRouter= require("../middleware/authMiddleware")
const findRouter = require("./cards/find")
const editRouter = require('./cards/edit')
const deletedRouter = require('./cards/deleted')

router.use("/new", middleWareRouter, newCardRouter)
router.use("/find", middleWareRouter, findRouter )
router.use("/edit", middleWareRouter, editRouter)
router.use("/delete", middleWareRouter, deletedRouter )

module.exports = router