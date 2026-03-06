const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi Shivendu, how are you ");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  if (email === "shivendu0103@gmail.com" && password === "Shivendu@123") {
    return res.json({
      success: true,
      message: "Login successful",
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});