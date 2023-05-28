const express = require('express');
require('./config');
const product = require('./product');

const app = express();

app.use(express.json());

app.post('/create',async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);
});

app.listen(3000, () => {
    console.log("Server is listening PORT 3000");
})