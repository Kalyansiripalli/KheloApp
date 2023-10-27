const {body,validationResult}=require("express-validator");

exports.signUpValidator=[
    body("name").isString().isLength({min:3}).not().isEmpty(), 
    body('email').isEmail(),
    body("password").isString().isLength({min:6}).not().isEmpty(),
    
    (req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors);  
        }
        next();
    }
];