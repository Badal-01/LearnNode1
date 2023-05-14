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
app.get("/list",async (req,res)=>{
    let data = await Products.find();
    console.log(data);
    res.send(data);
})
app.delete("/delete/:_id",async (req,res)=>{
    console.log(req.params);
    let result = await Products.deleteOne(req.params)
    res.send(result);
})

app.put("/update/:_id",async (req,res)=>{
    console.log("Hiii")
    console.log(req.params);
    let result  = await Products.updateOne(
        req.params,
        {$set:req.body}
    );
    res.send(result);
})

app.listen(5000);