const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;  // 👈 fixed

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(vaLue) {
            if (!validator.isEmail(vaLue)) {
                throw new Error("not valid email address")
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    carts: Array
});

userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
});

// token generate
userSchema.methods.generateAuthtoken = async function () {
    try {
        const token_one = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);  // 👈 fixed

        this.tokens = this.tokens.concat({ token: token_one });
        await this.save();

        return token_one;

    } catch (error) {
        console.log(error);
    }
};

// add to cart data
userSchema.methods.addcartdata = async function (cart) {
    try {
        this.carts = this.carts.concat(cart);
        await this.save();
        return this.carts;
    } catch (error) {
        console.log(error);
    }
};

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;