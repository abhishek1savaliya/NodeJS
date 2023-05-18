const express = require('express');
const path = require('path');

const app = express();

 
const dirpath = path.join(__dirname,'./public');
// app.use(express.static(dirpath));


app.set('view engine','ejs');

app.get('',(_,res)=>{
        res.sendFile(`${dirpath}/index.html`);
});

app.get('/profile',(_,res)=>{
        const user = {
                name : 'Krishna',
                email : 'abhisheksavaliya666@gmail.com'
        }
        res.render('profile',{user});
});



app.get('/krishna',(_,res)=>{
        res.sendFile(`${dirpath}/about.html`);
})
app.get('*',(_,res)=>{
        res.sendFile(`${dirpath}/404.html`);
})



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})