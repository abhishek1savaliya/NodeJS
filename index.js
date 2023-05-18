const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`<h1>Welcome ${req.query.name}</h1> <br> <br>
    <a href="/about">About page</a>`); 
})
app.get('/about',(req,res)=>{
    res.send(`Enter you name : <input type="text" id="fname" name="fname" value=${req.query.god}><br><br>
    <button type="submit">Click me</button>`);

})
app.get('/help',(req,res)=>{
    res.send([
        {
            name : "Krishna",
            city:"Vrindavan"
        },
        {
            name : "Radha",
            city:"Vrindavan"
        },
        {
            name : "Jashoda",
            city:"Vrindavan"
        },
        {
            name : "Nandbava",
            city:"Vrindavan"
        }
    ]);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})