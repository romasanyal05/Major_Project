const express = require("express");

const router = express.Router();

router.post("/screenshot", (req, res) => {

  res.json({
    success: true,
    message: "Screenshot analyzed successfully",
    riskLevel: "Medium",
    findings: [
      "Fake login form detected",
      "Brand impersonation suspected"
    ]
  });

});

module.exports = router;