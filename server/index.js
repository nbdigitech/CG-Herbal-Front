const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users'); // 

const app = express();

// ✅ Middleware
app.use(cors({ origin: ' http://localhost:3000' }))
app.use(express.json());

// ✅ Serve static images from "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Mount routes
app.use('/api/auth', authRoutes);         // Login, Signup, etc.
app.use('/api/products', productRoutes);  // Add/Get/Delete products
app.use('/api/user', userRoutes);        // Fetch user list

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
