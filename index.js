const express = require('express');
const path = require('path');
const reqFilter = require('./middleware');
const route = express.Router();

const app = express();

route.use(reqFilter);

app.get('/',(_,res)=>{
          res.send("Welcome to home page");
});

app.get('/user',(_,res)=>{
     res.send('Welcome to user page');
});

route.get('/contact',(_,res)=>{
     res.send('Welcome to contact page');
});

route.get('/about',(_,res)=>{
     res.send('Welcome to about page');
});

app.use('/',route);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})