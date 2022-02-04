const Items = require('../model/Items')

// @desc    Get all Items

exports.getItems = async (req, res, next) => {
  try {
    const items = await Items.find()

    return res.status(200).json({
      success: true,
      data: items,
      count: items.length,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

// @desc    Add Item
exports.addItem = async (req, res, next) => {
  try {
    const itemToAdd = await Items.create(req.body)

    return res.status(200).json({
      success: true,
      data: itemToAdd,
      count: 1,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

// @desc    Update  Item
exports.updateItem = async (req, res, next) => {
  try {
    const id = req.params.id

    const itemToEdit = await Items.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!itemToEdit) {
      return res.status(200).json({
        success: false,
        message: 'Invalid Item ID.',
      })
    }

    return res.status(200).json({
      success: true,
      data: itemToEdit,
      count: 0,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

// @desc    Delete Single  Item
exports.deleteSingleItem = async (req, res, next) => {
  try {
    const id = req.params.id

    const itemDeleted = await Items.findByIdAndDelete(id)
    if (!itemDeleted) {
      return res.status(200).json({
        success: false,
        message: 'Invalid Item ID.',
      })
    }

    return res.status(200).json({
      success: true,
      data: [],
      count: 0,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

// @desc    Delete All  Items
exports.deleteAllItems = async (req, res, next) => {
  try {
    await Items.deleteMany()

    return res.status(200).json({
      success: true,
      data: [],
      count: 0,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}
