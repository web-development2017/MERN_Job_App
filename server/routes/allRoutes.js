const express = require('express');
const { 
    getItems,
    getItem,
    createItem,
    deleteItem,
    updateItem
 } = require('../controllers/itemController');

const router = express.Router();

// GET all workouts
router.get('/', getItems);

//GET a single workout
router.get('/:id', getItem);

//POST
router.post('/', createItem);

// DELETE
router.delete('/:id', deleteItem);

//UPDATE
router.patch('/:id', updateItem);

module.exports = router;