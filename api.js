const express = require('express');
const dbconnect = require('./mongodb');
const app = express();

app.get('/',async (req, res) => {
    let data = await dbconnect();
    let result = await data.find().toArray();
    res.send(result);
});

app.listen(3000, () => {
    console.warn("PORT is running on 3000");
})


