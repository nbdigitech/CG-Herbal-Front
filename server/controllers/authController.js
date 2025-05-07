const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "cg_herbal_secret_key"; // for demo only (you can store in .env)

exports.register = async (req, res) => {
  const { name, email, password , } = req.body;

  try {
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User Registered Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
