const Brand = require('../models/BrandModel');
const nullifiable = () => {
    res.status(404);
    res.json({message: "Not found a comment with this id"})
    res.end();
}

exports.listenAllBrands = async (req,res) => {
    try{
        const brands = await Brand.find({});
        res.status(200);
        res.json(brands);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : "Error server."});
    }
};

exports.createABrand =  async(req, res) => {
    const newBrand = new Brand(req.body);
    try{
        const brand = await newBrand.save();

        res.status(201);
        res.json(brand);
    } catch(error) {
        res.status(500);
        console.log(error);
        res.json({message : `Error server.`});
    }
}
