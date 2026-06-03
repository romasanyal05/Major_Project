const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

  res.json({
    success: true,

    reports: [],

    total: 0
  });

});

module.exports = router;