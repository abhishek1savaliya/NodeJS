const dbconnect = require('./mongodb');

const inser = async () => {
    const db = await dbconnect();
    const result = await db.insertMany([{
        Name: 'Jay shree Krishna',
        Brnach: 'Computer',
        Age: 21,
    },
    {
        Name: 'Ram',
        Brnach: 'Electric',
        Age: 20,
    },
    {
        Name: 'Radha',
        Brnach: 'Computer',
        Age: 22,
    }]);
    if (result.acknowledged) {
        console.log("Data is successfully inserted");
    }
};

inser();
