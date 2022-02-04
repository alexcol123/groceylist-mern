const express = require('express')
const router = express.Router()
const { getItems, addItem , updateItem, deleteSingleItem, deleteAllItems} = require('../controllers/items')

router.route('/').get(getItems).post(addItem).delete(deleteAllItems)

router.route('/:id').patch(updateItem).delete(deleteSingleItem)

module.exports = router
