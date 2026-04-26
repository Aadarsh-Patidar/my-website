const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Dummy data (temporary)
let users = [];

// Register
app.post("/register", (req, res) => {
    users.push(req.body);
    res.send("User registered");
});

// Login
app.post("/login", (req, res) => {
    const user = users.find(
        u => u.username === req.body.username && u.password === req.body.password
    );

    if (user) {
        res.send("Login success ✅");
    } else {
        res.send("Invalid credentials ❌");
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running"));
app.use(express.static("."));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});