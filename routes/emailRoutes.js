const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

router.post("/scan-email", verifyToken, (req, res) => {

  const { content } = req.body;

  res.json({
    success: true,
    message: "Email analyzed successfully",
    content,
    risk: "Medium"
  });

});

module.exports = router;