const jwt = require('jsonwebtoken');

// JWT secret key
const SECRET_KEY = process.env.JWT_SECRET;

// JWT expiration time
const EXPIRES_IN = '1h';

// Generate JWT token
function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
}

// Middleware to verify JWT token
// routes using this middleware will only be accessible with a valid JWT
function verifyToken(req, res, next) {
  // token is expected to be in the cookies
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ error: 'no token provided' });
  }

  try {
    // verify the token
    const decoded = jwt.verify(token, SECRET_KEY);

    // decoded token will be available in req.user
    // this can be used to identify the user in subsequent requests
    req.user = decoded;

    // call the next middleware
    next();
  } catch (err) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

module.exports = {
  generateToken,
  verifyToken
};

