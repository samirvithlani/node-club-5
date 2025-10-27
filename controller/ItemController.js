const itemModel = require("../model/ItemModel")
const createItem = async(req,res)=>{

        const savedItem = await itemModel.create(req.body)
        res.status(201).json({
            message:"item created succwssfully!!",
            data:savedItem
        })


}

const getAllItems = async(req,res)=>{

    const flag = req.query.flag
    const items = await itemModel.find({status:flag || true})
    res.status(200).json({
        message:"all items fetched",
        data:items
    })

}
module.exports = {
    createItem,getAllItems
}