require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const scanRoutes = require("./routes/scanRoutes");
const emailRoutes = require("./routes/emailRoutes");
const qrRoutes = require("./routes/qrRoutes");
const screenshotRoutes = require("./routes/screenshotRoutes");
const assistantRoutes = require("./routes/assistantRoutes");
const compareRoutes = require("./routes/compareRoutes");
const historyRoutes = require("./routes/historyRoutes");
const reportsRoutes = require("./routes/reportsRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/scan", scanRoutes);

app.use("/api/scan", emailRoutes);

app.use("/api/scan", qrRoutes);

app.use("/api/scan", screenshotRoutes);

app.use("/api/assistant", assistantRoutes);

app.use("/api/scan/compare", compareRoutes);

app.use("/api/scan/history", historyRoutes);

app.use("/api/reports", reportsRoutes);



app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});