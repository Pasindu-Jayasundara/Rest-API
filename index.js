const express = require('express');
const app = express();

app.listen(3001,(req,res)=>{
    console.log("Server is running on port http://localhost:3001");
});

app.get('/',(req,res)=>{
    res.send("get request");
});
app.post('/',(req,res)=>{
    res.send("post request");
});