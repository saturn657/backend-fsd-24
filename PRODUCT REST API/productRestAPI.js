import express from 'express';
import fs from 'fs';
const app = express();
app.use(express.json());

let products = JSON.parse(fs.readFileSync('./product.json', 'utf-8'));
app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    let product = products.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

app.post('/products', (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };

    products.push(product);
    res.json(product);
});

app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id == req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.category = req.body.category;

    res.json(product);
});

app.delete('/products/:id', (req, res) => {
    products = products.filter(p => p.id != req.params.id);
    res.send("Product deleted successfully");
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});