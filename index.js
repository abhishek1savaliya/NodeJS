const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/Krishna');
}
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});
main();


const saveInDB = async () => {
    const ProductsModel = mongoose.model('product', productSchema);
    let data = new ProductsModel({
        name: "morpich",
        price: 9000,
        brand: "Peacock",
        category: "Bird"
    });

    let result = await data.save();
    console.log(result);
};

const updateInDB = async () => {
    const Product = mongoose.model('product', productSchema);
    let data = await Product.updateOne({ name: "morpich" }, {
        $set: {
            price: 70,
        }
    });
};

const deleteInDB = async () => {
    const Product = mongoose.model('product', productSchema);
    let data = await Product.deleteOne({
        name: "morpich"
    })
};

const findInDB = async()=>{
    const Product = mongoose.model('product', productSchema);
    let data = await Product.find();
    console.log(data);
}

findInDB();
