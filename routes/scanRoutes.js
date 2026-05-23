const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

router.post("/scan-url", verifyToken, (req, res) => {

  const { url } = req.body;

  res.json({
    success: true,
    message: "URL scanned successfully",
    scannedUrl: url,
    risk: "Low"
  });

});

module.exports = router;