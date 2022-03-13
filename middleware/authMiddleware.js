const jwt= require('../config/jwt')

module.exports= async(req, res, next) => {
    try{
        req.tokenData = await jwt.verifyToken(req.headers.token)
        next()
    }catch(err){
        res.status(401).json({
            status:401,
            msg: "you must be logged in to see this"
         })
    }
}