const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// 📥 Get all users (needed for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    console.log('Fetched users:', users);
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
});

// ✅ Add New User (POST)
router.post('/add', async (req, res) => {
  console.log("🔔 Received new user data:", req.body);

  const { name, email, phone, password, gender, dateOfBirth, shippingAddress } = req.body;

  // 🔍 Validate required fields
  if (!name || !email || !phone || !password) {
    return res.status(400).json({
      message: 'Please provide name, email, phone, and password',
    });
  }

  try {
    // 🔐 Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✍️ Create a new user with all data
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      gender,
      dateOfBirth,
      shippingAddress,
    });

    // 💾 Save user to DB
    await newUser.save();

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (err) {
    console.error("❌ Error while saving user:", err.message);
    res.status(500).json({
      message: 'Failed to create user',
      error: err.message,
    });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { name, email, phone, gender, dateOfBirth, shippingAddress, password } = req.body;
    console.log('Received update data:', req.body);

    const updatedData = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (phone) updatedData.phone = phone;
    if (gender) updatedData.gender = gender;
    if (dateOfBirth) updatedData.dateOfBirth = dateOfBirth ? new Date(dateOfBirth) : null;
    if (shippingAddress) updatedData.shippingAddress = shippingAddress;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Updated user:', updatedUser);
    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (err) {
    console.error('❌ Error updating user:', err.message);
    res.status(500).json({ message: 'Failed to update user', error: err.message });
  }
});

// 🗑️ DELETE a user (DELETE)
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err.message });
  }
});

module.exports = router;
