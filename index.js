const express = require('express');
const path = require('path');

const app = express();

 
const dirpath = path.join(__dirname,'./public');
app.use(express.static(dirpath));



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})