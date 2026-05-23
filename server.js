require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const scanRoutes = require("./routes/scanRoutes");
const emailRoutes = require("./routes/emailRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.use("/scan", scanRoutes);

app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});