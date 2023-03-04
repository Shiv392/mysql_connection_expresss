const express=require('express');
const app=express();
const mysql=require('mysql');
const port=8000;

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Shiv@3923',
    database:'school'
})
connection.connect((err)=>{
    if(err){console.warn(err)}
    else {
     console.log(`connection successfull`);
    }
})

connection.query('select * from students',(err,res)=>{
  if(err){
    console.warn(err);
  }
  else{
    console.log(`result is `+ JSON.stringify(res));
  }
})

app.get('/',(req,res)=>{
    res.send(`<h1>this is home page</h1>`)
})

app.listen(port,()=>{
    console.log(`server is listning on http://localhost:${port}`);
})