const express = require('express');
require('./config');
const Products = require('./product');


const app = express();
app.use(express.json());
app.post("/create",async (req,res)=>{
    let data = new Products(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
    
})

app.listen(5000);