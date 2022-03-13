const { string } = require('joi');
const mongoose = require('mongoose');
const { findUserByEmail } = require('./userModel');

const cardSchema = new mongoose.Schema({
    bizName: {
        type: String,
        required: true,
    },
    bizDescription: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    user_id: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
    },
})

const Card = mongoose.model('cards', cardSchema)
const createdCard = (bizName, bizDescription, address, phoneNumber,photo,  user_id) =>{
    const newCard = new Card(bizName, bizDescription, address, phoneNumber,photo,  user_id)
    return newCard.save()
}

const findCardById = CardId => {
    return Card.findById(CardId)
}

module.exports = {
    createdCard,
    findCardById,
    Card
}