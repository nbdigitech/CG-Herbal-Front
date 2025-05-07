const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  discount: Number,
  stock: Number,
  image: String // image URL
});

module.exports = mongoose.model('Product', ProductSchema);
