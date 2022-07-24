const express = require('express');

require('dotenv').config();

const cors = require('cors');

const allRoutes = require('./routes/allRoutes');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

if(process.env.NODE_ENV === "production"){
    console.log("Production");
   
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
    });
    
}else{
    console.log("Development");
}

//Middleware
app.use(express.json());

//Connect to database
connectDB().then(() => {
    app.listen(port, console.log(`Server running on port ${port}`));
}).catch((error) => {
    console.log(error);
});

const subDirectory = '/api/items';

//Global middleware that run on every time between req res
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//Routes
app.use(subDirectory, allRoutes);