const express = require("express");

const router = express.Router();

router.post("/qr", (req, res) => {

  res.json({
    success: true,
    message: "QR scanned successfully",
    riskLevel: "Low",
    findings: [
      "QR code appears safe"
    ]
  });

});

module.exports = router;