const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"story"
});

con.connect((err)=>{
    if(err){
        console.warn(err)
    }
    else{
        console.warn("connected")
    }
});

con.query('select * from udata',(err,result)=>{
   console.warn("Result",result);
});

