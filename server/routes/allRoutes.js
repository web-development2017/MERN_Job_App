const express = require('express');

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
router.post('/', (req, res) => {
    res.json({ message: 'POST a new item'})
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