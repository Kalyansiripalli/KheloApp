const jwt = require('jsonwebtoken');
const secretkey="asdfg";

const authorization =async (req, res, next) => {
    try {
        if (req.headers.authorization){
            const bearertoken=req.headers.authorization;
            let token=bearertoken.split(" ")[1];
            const decodedPayload=jwt.verify(token,secretkey);
            if(decodedPayload)
                return next();
        }
        return res.send("pls kindly login first and then try again");   
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = authorization;
                                                  