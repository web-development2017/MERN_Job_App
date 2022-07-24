const express = require('express');

require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

//Global middleware that run on every time between req res
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//routes middleware 
app.get('/', (req, res) => {
    res.json({ message: 'MERN_App' })
});

app.listen(port, console.log(`Server running on port ${port}`));