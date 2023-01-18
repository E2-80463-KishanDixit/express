const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.write("<h1>welcome to home page</h1>");
    res.send();
});

app.get('/about',(req,res)=>{
    res.status(200).send("welcome to about page");
});

app.get('/contact',(req,res)=>{
    res.status(200).send("welcome to contact page");
});

// app.get('/temp',(req,res)=>{
//     res.send([
//         {
//         id: 1,
//         name:"kishan"
//     },
//     {
//         id: 1,
//         name:"kishan"
//     },
//     {
//         id: 1,
//         name:"kishan"
//     }
// ]);
// });

app.get("/temp",(req,res)=>{
    res.json([
        {
        id: 1,
        name:"kishan"
    },
    {
        id: 1,
        name:"kishan"
    },
    {
        id: 1,
        name:"kishan"
    }
]);

});

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});