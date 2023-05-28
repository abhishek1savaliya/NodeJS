const express = require('express');
require('./config');
const product = require('./product');

const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);
});

app.get('/list', async (req, res) => {
    let data = await product.find();
    res.send(data);
});

app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params);
    let data = await product.deleteOne(req.params);
    if(data.deletedCount>0){
        res.send("Data is successfully deleted");
    }
    else{
        res.send("Data is not exist");
    }
});

app.put('/update/:_id', async (req, res) => {
    let data = await product.updateOne(req.params,{
        $set: req.body
    });
    if(data.modifiedCount>0){
        res.send("Data is successfully updated");
    }
    else{
        res.send("Data is already update");
    }
});

app.listen(3000, () => {
    console.log("Server is listening PORT 3000");
})