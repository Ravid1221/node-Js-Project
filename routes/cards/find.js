const express = require('express')
const router = express.Router()
const CardModel = require('../../model/cardModel')

router.get('/:id',async(req, res) =>{
    try{
        const find = await CardModel.findCardById(req.params.id)
        res.json({
            status:200,
            msg: 'Card found',
            card: find
        })
    }catch(err){
        res.status(400).json({
            status: 400,
            msg: 'No card found with this id'
        })
    }
})

module.exports = router;