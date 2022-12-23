const cartSchema = require("../model/CartSchema");


exports.addToCart = (req,res)=>{

    const cart = new cartSchema(req.body);

    cart.save((err,data)=>{

        if(err){
            return res.status(400).json({
                error:"Unable to add to cart"
            })
        }
        else{
            return res.status(200).json({
                message:"Added to cart"
            })
        }

    })

}

exports.getCartDetails = (req,res)=>{

    cartSchema.find().populate('user').populate('products').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"Unable to fetch cart details"
            })
        }
        else{
            return res.status(200).json({
                data:data,
                message:"Cart details fetched"
            })
        }

    })
}

exports.getCartbyUserId = (req,res)=>{
    let uId = req.params.id;
    cartSchema.find({products:uId}).populate('user').populate('products').exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"Unable to fetch cart details"
            })
        }
        else{
            return res.status(200).json({
                data:data,
                message:"Cart details fetched"
            })
        }

    })
}

        