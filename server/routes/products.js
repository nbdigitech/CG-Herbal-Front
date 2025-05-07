const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getAllProducts, addProduct, deleteProduct , updateProduct } = require('../controllers/productController');

// Multer config for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Get all products (with optional search query)
router.get('/', getAllProducts);

// Add a product (with image upload)
router.post('/add', upload.single('image'), addProduct);

// Delete product by ID
router.delete('/delete/:id', deleteProduct);

// Update product by ID (with image upload)
router.put('/update/:id', upload.single('image'), updateProduct);

module.exports = router;
