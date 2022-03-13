const express = require('express')
const router = express.Router()
const userValidation = require('../../validation/userValidation')
const UserModel = require("../../model/userModel")
const bcrypt = require("../../config/bcrypt")
const jwt = require("../../config/jwt")

router.post('/', async(req, res)=> {
    try{
        const value = await userValidation.loginSchema.validateAsync(req.body, {abortEarly:false})
        const useArr = await UserModel.findUserByEmail(value.email)
        if(useArr.length !=0){
            const isPassOk= await bcrypt.compareHash(value.password, useArr[0].password)
            if(isPassOk == true){
                const token = await jwt.createToken({id: useArr[0].id, biz: useArr[0].biz})
                res.json({
                    status:200,
                    msg: `logged in successfuly, welcome back ${useArr[0].name}`, 
                    token: token
                })
            }else{
                throw "wrong password"
            }
        }
        else{
            throw "no email found, please register"
        }
    }catch(err){
        res.json({status:400, msg:err})
    }
})

module.exports = router;