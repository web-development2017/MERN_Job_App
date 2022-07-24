const express = require('express');

require('dotenv').config();

console.log("Success reading from .env file " + process.env.PORT)

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, console.log(`Server running on port ${port}`));