import express from 'express';
const app = express();
app.use(express.json());
let users=[
    { id: 1, name: "xyz", email: "xyz@example.com" },
    { id: 2, name: "abc", email: "abc@example.com" }
];
//Get :get request to fetch all users
app.get('/users',(req,res)=>{
    res.json(users);
});
//Post :post request to create a new user
app.post('/users',(req,res)=>{
const user={
    id:users.length+1,
    name:req.body.name,
    email:req.body.email
};
users.push(user);
res.json(user);
})

app.delete('users/:id',(req,res)=>{
    users=users.filter(u=>u.id!=req.params.id);
    res.send("User Deleted Successfully");
})
app.listen(8000,()=>{
    console.log('Server is running on port http://localhost:8000');
});

//Create a PRODUCT REST API and test all method in THUNDER CLIENT
//work it on approx 100 products and test all the methods in THUNDER
