const jwt = require('jsonwebtoken')

const createToken = data =>{
    return new Promise((res,rej)=>{
        jwt.sign(data, "jisjkiknznvjhkjnkjdk#$%^^,mkkmiosjik", { expiresIn: '7d' } , (err,token)=>{
            if(err) rej(err)
            else res(token)
        })
    })
}

const verifyToken = token =>{
    return new Promise((res,rej)=>{
        jwt.verify(token, "jisjkiknznvjhkjnkjdk#$%^^,mkkmiosjik", (err, decoded)=>{
            if(err) rej(err)
            else res(decoded)
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}
