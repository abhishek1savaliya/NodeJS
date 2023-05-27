const dbconnect = require('./mongodb');

const del = async () => {
    const data = await dbconnect();
    const result = await data.deleteMany({ Name: 'Radha' });
    if (result.acknowledged) {
        console.warn("Data is Successfully Deleted");
    }
}

del();