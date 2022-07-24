const express = require('express');

require('dotenv').config();

const allRoutes = require('./routes/router');
const port = process.env.PORT || 5000;

const app = express();

const subDirectory = '/api/items';

app.use(express.json());
//Global middleware that runs every time between a req res
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.use(subDirectory, allRoutes);

app.listen(port, console.log(`Server running on port ${port}`));