const express=require('express');
const bodyParser = require('body-parser');
const configmysql = require('../config.js');
const route=express.Router();

route.use(bodyParser.json());
route.use(express.urlencoded({extended:true}))

route.get('/', (req, res) => {
    configmysql.query('select * from students', (err, result) => {
        if (err) {
            res.send(`<h1>something happend 404 not found`);
        }
        else {
            res.json(result)
        }
    })
})

route.post('/',(req,res)=>{
    const data=req.body;
    configmysql.query('insert into students SET ?',data,(err,result,fields)=>{
      if(err) throw err;
      res.send(result)
    })
  
  })

  route.put('/:id',(req,res)=>{
    const data=[req.body.firstname,req.body.lastname,req.body.age,req.params.id];
    configmysql.query('update students SET firstname=?,lastname=?,age=? where roll_no=?',data,(err,result,fields)=>{
   if(err) throw err;
   else res.json(result);
    })
  })

  route.delete('/:id',(req,res)=>{
    configmysql.query('delete from students where roll_no='+req.params.id,(err,result,fields)=>{
        if(err) throw err;
        else res.json(result);
    })
  })

module.exports=route;