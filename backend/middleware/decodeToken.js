const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET; // Ensure your environment variable is set

const decodeToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error("Failed to verify token:", error);
    return null;
  }
};

module.exports = {
  decodeToken,
};
