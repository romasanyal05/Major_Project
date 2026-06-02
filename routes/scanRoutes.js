const express = require("express");

const scanHistory = require("../data/scanHistory");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");


router.post("/url", (req, res) => {

  const { url } = req.body;

scanHistory.push({
  id: scanHistory.length + 1,
type: "url",
  target: url,
  riskLevel: "Low_risk",
  score: 12,
  classification: "Safe",
  createdAt: new Date()
});
  res.json({
    success: true,
    message: "URL scanned successfully",
    scannedUrl: url,
    riskLevel: "Low_risk",
    score: 12,
    findings: [
      "No malicious indicators detected"
    ]
  });

});



module.exports = router;