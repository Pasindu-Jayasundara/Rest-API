const express = require('express');
const app = express();
const {User} = require('./models');

app.use(express.json());

app.listen(3001,(req,res)=>{
    console.log("Server is running on port http://localhost:3001");
});

app.get('/', async (req,res)=>{

    const users = await User.findAll();
    res.json(users);

    // res.send("get request");
});

app.post('/', async (req,res)=>{

    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });
    res.json(newUser);

    // res.send("post request");
});

app.delete('/:id', async (req,res)=>{

    const id = req.params.id;
    const isDeleted = await User.destroy({
        where:{
            id:id
        }
    });
    res.json(isDeleted);
});

app.put('/:id', async (req,res)=>{

    const id = req.params.id;
    const affectedRows = await User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    },{
        where:{
            id:id
        }
    });
    res.json(affectedRows);
});