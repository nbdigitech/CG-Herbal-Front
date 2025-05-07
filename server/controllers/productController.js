const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};

// Add a product
exports.addProduct = async (req, res) => {
  const { name, description, price, stock, manufacturingDate, expiryDate } = req.body;
  const image = req.file ? req.file.filename : ''; // handle image file upload

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      manufacturingDate,
      expiryDate,
      
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add product', error: err.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { name, price, stock, description } = req.body;
  const image = req.file ? req.file.filename : null; // Optional image upload

  // Check that all required fields are present
  if (!name || !price || !stock || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Only update fields that are provided in the request
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        stock,
        description,
        image: image || undefined, // Optional image update
      },
      { new: true } // Return the updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct); // Return updated product
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err.message });
  }
};
