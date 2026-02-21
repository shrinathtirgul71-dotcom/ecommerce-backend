const jwt = require("jsonwebtoken");
const USER = require("../models/userSchema");

const secretKey = process.env.SECRET_KEY;

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.Amazonweb;

    if (!token) {
      return res.status(401).send("unauthorized: No token provided");
    }

    const verifyToken = jwt.verify(token, secretKey);

    const rootUser = await USER.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      return res.status(401).send("unauthorized: User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("unauthorized: Invalid token");
  }
};

module.exports = authenticate;
