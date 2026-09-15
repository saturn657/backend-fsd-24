import express from 'express';
import cors from 'cors';
import fs from 'fs';
import product from product;
const app=express();

app.use(cors());
app.use(express.json());

//GET
app.get('/products',(req,res)=>{
    const data=fs.readFile("product.json","utf-8");
    const product=JSON.parse(data);
    res.json(products);
})

app.post('/products',(req,res)=>{
    const data=fs.readFile("product.json","utf-8");
    const products=JSON.parse(data);
    const newProduct={
        id:products.length+1,
        name:req.body.name,
        price:req.body.name
    };
    products.push(newProduct);
    fs.writeFile("product.json",JSON.stringify(products,()=>{
        
    }))
})

app.listen(4000,()=>{

})