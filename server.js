const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/mydb");

// Schema
const User = mongoose.model("User", {
    username: String,
    password: String
});

// Register
app.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("User registered");
});

// Login
app.post("/login", async (req, res) => {
    const user = await User.findOne(req.body);
    if (user) {
        res.send("Login success ✅");
    } else {
        res.send("Invalid credentials ❌");
    }
});

app.listen(3000, () => console.log("Server running"));