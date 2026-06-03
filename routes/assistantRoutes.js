const express = require("express");

const router = express.Router();

router.post("/chat", (req, res) => {

  const { message } = req.body;

 res.json({
  success: true,
  reply:
    "Phishing emails usually contain urgent language, suspicious links, and fake sender addresses."
});

});

router.delete("/history", (req, res) => {

  res.json({
    success: true,
    message: "Chat history cleared successfully"
  });

});

module.exports = router;