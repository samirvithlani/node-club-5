const productSchema = require('../model/ProductSchema');

exports.createProduct = (req, res) => {


    const product = new productSchema(req.body);
    product.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:'Error in saving data'
            })
        }
        else{
            res.status(201).json({
                message:'Data saved successfully',
                data:data
            })
        }
    })

}
exports.getAllProducts = (req, res) => {
    productSchema.find({},(err,data)=>{
        if(err){
            res.status(500).json({
                message:'Error in fetching data'
            })
        }
        else{
            res.status(200).json({
                message:'Data fetched successfully',
                data:data
            })
        }
    })
}
