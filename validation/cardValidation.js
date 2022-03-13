const Joi = require('joi');

const cardSkeleton = {
    bizName:Joi.string().required(),
    bizDescription: Joi.string().required(),
    address: Joi.string().required(),
    phoneNumber: Joi.number().required(),  
    photo: Joi.string().required(),
}

const editSkeleton = {
      bizName:Joi.string(),
    bizDescription: Joi.string(),
    address: Joi.string(),
    phoneNumber: Joi.number(),  
    photo: Joi.string(),
}

const cardSchema = Joi.object(cardSkeleton) 
const editSchema = Joi.object(editSkeleton)

module.exports = {
    cardSchema,
    editSchema
}