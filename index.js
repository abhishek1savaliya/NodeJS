const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(JSON.stringify({page:'Home'}));
})
app.get('/about',(req,res)=>{
    res.send(JSON.stringify({page:'About'}));
})
app.get('/help',(req,res)=>{
    res.send("This is help page");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})