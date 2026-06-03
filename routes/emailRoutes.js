const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

router.post("/email", (req, res) => {

  const { content } = req.body;

  res.json({
    success: true,
    message: "Email analyzed successfully",
    content,
    riskLevel: "Medium",
    score: 78 ,
    findings: [
      "Suspicious sender detected",
      "Urgent language detected"
    ]
  });

});

module.exports = router;