const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config();

const verifyToken = (req, res, next) => {
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded.user._id)
    req.headers._id = decoded.user._id;
    next()
}

module.exports = verifyToken;