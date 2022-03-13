const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    biz: {
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model('users', userShema)
const creatUser = (name, email, password, biz)=>{
    const newUser = new User({name, email, password, biz})
    return newUser.save()
}

const findUserByEmail = email =>{
    return User.find({email: email})
}

const findUserById = id => {
    return User.findById(id)
}

module.exports = {
    creatUser,
    findUserByEmail,
    findUserById
}