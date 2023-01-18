const path = require('path');
const express = require('express');
const app = express();
// console.log(__dirname);

// console.log(path.join(__dirname,'../public'));

const staticPath = path.join(__dirname,'../public');

// middleware 
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.send("hello world of express");
});

app.get('/about',(req,res)=>{
    res.send("Hello from about Page");
})
app.listen(8000,()=>{
    console.log("listening at port 8000");
});


// API
// get- read
// post- create
// put - update
// delete- delete