const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/Krishna');
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number
    });

    const ProductsModel = mongoose.model('product',productSchema);
    
    let data = new ProductsModel({
        name:"morpich",
        price:9000
    });

    let result =await data.save();
    console.log(result);
};

main();