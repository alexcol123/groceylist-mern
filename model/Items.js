const mongoose = require('mongoose') // Erase if already required

var ItemSchema = new mongoose.Schema(
  {
    itemNameOnList: {
      type: String,
      trim: true,
      required: [true, 'Please add a value'],
    },
    important: { type: Boolean, default: false },
  },
  { timestamps: true }
)

//Export the model
module.exports = mongoose.model('Item', ItemSchema)
