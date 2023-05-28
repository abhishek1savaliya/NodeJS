const express = require('express');
const con = require('./config');
const app = express();

app.get("/",(req,res)=>{
    con.query('select * from udata',(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});

app.listen(3000);