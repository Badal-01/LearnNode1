const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-com");

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    categoty:String,
});

async function saveInDb(){
    const Product = mongoose.model('Product',productSchema);
    let data = new Product({
        name: "Note 6",
        price:15000,
        brand:"MI",
        categoty:"Note",
    })
    const result = await data.save();
    console.log(result);
}

saveInDb();

const updateInDb = async () =>{
    const Product = new mongoose.model("Product",productSchema);
    let data = await Product.updateOne(
        {name:"Note 6"},
        {
            $set:{price:18000}
        }
    );
    console.log(data)
}

updateInDb();