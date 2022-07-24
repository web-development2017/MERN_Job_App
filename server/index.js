const express = require('express');

require('dotenv').config();

const allRoutes = require('./routes/router');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connectDB().then(() => {
    app.listen(port, console.log(`Server running on port ${port}`));
}).catch((error) => {
    console.log(error);
});

const subDirectory = '/api/items';

app.use(express.json());
//Global middleware that runs every time between a req res
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.use(subDirectory, allRoutes);