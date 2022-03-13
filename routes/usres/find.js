const express = require('express')
const router = express.Router()
const userModel = require("../../model/userModel")

router.get("/", async(req, res) =>{
    try {
        const findUser = await userModel.findUserById(req.tokenData.id)
        res.json({
            status: 200,
            msg: "User found",
            name: findUser.name,
            email: findUser.email,
            biz: findUser.biz
        })
    } catch (err) {
        res.json({
            status:401,
            msg: "user not found"
        })
    }
})

module.exports= router;