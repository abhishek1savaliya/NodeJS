const express = require('express');
const dbconnect = require('./mongodb');
const mongodb = require('mongodb')

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbconnect();
    let result = await data.find().toArray();
    res.send(result);
});

app.post('/', async (req, res) => {
    let data = await dbconnect();
    let result = await data.insertMany([
        req.body
    ])

    if (result.acknowledged) {
        res.send(`${JSON.stringify(req.body)} is successfully added in database`);
    }
});

app.put('/', async (req, res) => {
    let data = await dbconnect();
    let result = await data.updateMany({ "name": "POCO X2", }, {
        $set: req.body
    });

    if (result.modifiedCount > 0) {
        res.send(`${JSON.stringify(req.body)} is successfully updated in database`);
    }
    else {
        res.send("No any data is available to update");
    }

});

app.delete('/:id', async (req, res) => {
    let data = await dbconnect();
    let result = await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });
    if (result.deletedCount > 0) {
        res.send("Data is deleted");
    }
    else {
        res.send("Data is not found");
    }
})

app.listen(3000, () => {
    console.warn("PORT is running on 3000");
})


