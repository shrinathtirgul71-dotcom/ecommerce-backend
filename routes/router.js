const express = require("express");
const router = express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

//getproductsdata API
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    res.status(200).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

// get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const individuadata = await Products.findOne({ id: id });
    res.status(201).json(individuadata);
  } catch (error) {
    res.status(400).json({ error: "Product not found" });
    console.log("error" + error.message);
  }
});

// register data
router.post("/register", async (req, res) => {
  try {
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
      return res.status(422).json({ error: "Fill all data" });
    }

    if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    }

    const preuser = await USER.findOne({ email });

    if (preuser) {
      return res.status(422).json({ error: "User already exists" });
    }

    const finalUser = new USER({
      fname,
      email,
      mobile,
      password
    });

    const storedData = await finalUser.save();
    res.status(201).json(storedData);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// login user API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    const userlogin = await USER.findOne({ email });

    if (!userlogin) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, userlogin.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = await userlogin.generateAuthtoken();
    console.log("TOKEN:", token);

    res.cookie("Amazonweb", token, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    });

    return res.status(200).json({ userlogin, token });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

// adding the data into cart
router.post("/addcart/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await Products.findOne({ _id: id });

    if (!cart) {
      return res.status(404).json({ error: "Product not found" });
    }

    const UserContact = await USER.findOne({ _id: req.userID });

    if (UserContact) {
      const cartData = await UserContact.addcartdata(cart);
      await UserContact.save();
      res.status(201).json(UserContact);
    } else {
      res.status(401).json({ error: "Invalid user" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// get cart details
router.get("/cartdetails", authenticate, async (req, res) => {
  try {
    const buyuser = await USER.findOne({ _id: req.userID });
    res.status(201).json(buyuser);
  } catch (error) {
    console.log("error" + error);
  }
});

// get valid user
router.get("/validuser", authenticate, async (req, res) => {
  try {
    const validuserone = await USER.findOne({ _id: req.userID });
    res.status(201).json(validuserone);
  } catch (error) {
    console.log("error" + error);
  }
});

// remove item from cart
router.delete("/remove/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
      return cruval.id != id;
    });

    await req.rootUser.save();
    res.status(200).json(req.rootUser);
    console.log("Item removed successfully");
  } catch (error) {
    console.log("Error: " + error);
    res.status(400).json({ error: "Failed to remove item" });
  }
});

// user logout api

router.get("/logout", authenticate, async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
      return curelem.token !== req.token;
    });
    
    res.clearCookie("Amazonweb", { 
      path: "/",
      httpOnly: true  // 👈 add this
    });
    
    await req.rootUser.save();
    res.status(201).json(req.rootUser.tokens);
    console.log("user logout");
  } catch (error) {
    console.log("error for user logout");
  }
});

// update name
router.put("/updatename", authenticate, async (req, res) => {
    try {
        const { fname } = req.body;
        req.rootUser.fname = fname;
        await req.rootUser.save();
        res.status(201).json(req.rootUser);
    } catch (error) {
        console.log("error: " + error);
        res.status(400).json({ error: "Failed to update name" });
    }
});

// update password
router.put("/updatepassword", authenticate, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const isMatch = await bcrypt.compare(currentPassword, req.rootUser.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Current password is incorrect" });
        }
        req.rootUser.password = newPassword;
        await req.rootUser.save();
        res.status(201).json({ message: "Password updated successfully" });
    } catch (error) {
        console.log("error: " + error);
        res.status(400).json({ error: "Failed to update password" });
    }
});

module.exports = router;