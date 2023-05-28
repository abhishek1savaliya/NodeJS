const express = require('express');
const con = require('./config');
const app = express();

app.use(express.json());

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

app.post('/',(req,res)=>{
    const data = req.body;
    con.query('insert into udata set ?',data,(err,result,field)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
});

app.put('/:id',(req,res)=>{
    const data = [req.body.title,req.body.description,req.body.url,req.params.id];
    con.query('UPDATE udata set title = ?,description=?,url=? where id=?',data,(err,result,field)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
});

app.listen(3000);