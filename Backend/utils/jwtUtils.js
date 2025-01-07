// utils/jwtUtils.js

const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, 'yourSecretKey');
    } catch (error) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
