const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.secret, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader) {
    return res.status(401).send("Token Missing");
  }
  const token = authheader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.secret);
    req.id = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { generateToken, verifyToken };
