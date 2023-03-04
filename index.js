const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route=require('./routes/index.js')
const port = 8000;

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

app.use(route)

app.listen(port, () => {
    console.log(`sever is listning on http://localhost:${port}`);
})