const express = require('express');
const Item = require('../models/itemModel')

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: 'GET all items'})
});
//GET a single workout
router.get('/:id', (req, res) => {
    res.json({ message: 'GET a single item'})
});
//POST
router.post('/', async (req, res) => {
    const { jobDescription, location, startDate } = req.body;
    try {
        const item = await Item.create({ jobDescription, location, startDate });
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// DELETE
router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE single item'})
});
//UPDATE
router.patch('/:id', (req, res) => {
    res.json({ message: 'Update single item'})
});

module.exports = router;