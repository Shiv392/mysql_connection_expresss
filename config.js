const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
     password:'Shiv@3923',
     database:'school'
})

connection.connect((err)=>{
    if(err){console.warn(err)}
    else {
        console.log(`connection successful`);
    }
})
module.exports=connection;