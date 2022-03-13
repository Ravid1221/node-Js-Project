const express = require('express')
const router = express.Router()
const CardModel = require('../../model/cardModel')
const CardValidation = require('../../validation/cardValidation')

router.delete("/:id", async(req, res) =>{
    try{
       const cardId = req.params.id
       const deleteCard = await CardModel.Card.findByIdAndDelete(cardId)
       console.log(deleteCard)
       res.json({
           status:200,
           msg: 'Card Delete'
       })
    }catch(err){
        res.json({
            status:400,
            msg: 'Id not found',
            err: err
        })
    }
})

module.exports = router;