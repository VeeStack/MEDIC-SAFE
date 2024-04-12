
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticateUser = async (req, res, next) => {
  try {
    // Extract JWT token from request headers
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify JWT token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Find user by ID from JWT payload
    const user = await User.findByPk(decoded.userId);

    // Check if user is verified
    if (!user.isVerified) {
      return res.status(401).json({ message: 'User is not verified' });
    }

    // Attach user object to request object for further processing
    req.user = user;
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};
