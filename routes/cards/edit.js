const express = require('express')
const router = express.Router()
const CardModel = require('../../model/cardModel')
const CardValidation = require('../../validation/cardValidation')

router.put('/:id', async(req, res) =>{
    try{
        const cardId = req.params.id
        const value = await CardValidation.editSchema.validateAsync(req.body) 
        const editedCard = await CardModel.Card.findByIdAndUpdate(cardId, {
            bizName: value.bizName,
            bizDescription: value.bizDescription,
            address: value.address,
            phoneNumber: value.phoneNumber,
            photo: value.photo
        })
        res.json({
            status:200,
            msg: 'card updated'
        })
    }catch(err){
         res.json({
            status:400,
            err: err
        })
    }
})

module.exports = router;