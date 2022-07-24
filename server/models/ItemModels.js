const mongoose = require('mongoose');

//Defines the structure
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    jobDescription: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    }
}, { timestamps: true });

//Applies schema to a model
module.exports = mongoose.model('Item', itemSchema);