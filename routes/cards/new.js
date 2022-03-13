const express = require('express')
const router = express.Router()
const cardValidation = require('../../validation/cardValidation')
const CardModel = require("../../model/cardModel")
const UserModel = require("../../model/userModel")

router.post("/", async(req, res) => {
    try{
        const value = await cardValidation.cardSchema.validateAsync(req.body, {abortEarly: false})
        const findUser = await UserModel.findUserById(req.tokenData.id)
        const newCard = await CardModel.createdCard({
            bizName: value.bizName,
            bizDescription: value.bizDescription,
            address: value.address,
            phoneNumber:value.phoneNumber,
            photo: value.photo,
            user_id: findUser.id
        })
        res.json({
            status: 200,
            msg: "card created",
            Card: newCard
        });
   }catch(err){
        res.status(400).json({
            status:400, 
            err:err
        });
    };
});

module.exports = router;