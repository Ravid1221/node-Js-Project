const express = require('express')
const router = express.Router()
const userValidation = require('../../validation/userValidation')
const bcrypt = require("../../config/bcrypt")
const UserModel = require("../../model/userModel")

router.post("/", async(req, res) => {
    try{
        const value = await userValidation.registerSchema.validateAsync(req.body, {abortEarly:false})
        value.password = await bcrypt.createHash(value.password)
        const isUserExsistArr= await UserModel.findUserByEmail(value.email)
        if(isUserExsistArr.length !=0){
            throw 'This email already exists'
        }else{
            const newUser = await UserModel.creatUser(value.name, value.email, value.password)
            res.json({
                status: 200,
                msg: "user created",
                name: value.name,
                email: value.email,
                id: newUser.id
            })
        }
    }catch(err){
        res.json({
            status: 400,
            msg: err
        })
    }
})

module.exports = router;