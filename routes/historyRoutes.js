const express = require("express");


const scanHistory = require("../data/scanHistory");
const router = express.Router();

router.get("/", (req, res) => {

  res.json({
    success: true,

    scans: scanHistory,
    total: scanHistory.length
  });

});

module.exports = router;