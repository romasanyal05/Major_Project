const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

  const { targetA, targetB, typeA, typeB } = req.body;

  res.json({
    a: {
      target: targetA || "No Target",

      type: typeA || "url",

      riskScore: 12,

      riskLevel: "safe",

      findings: [
        "No malicious indicators detected",
        "Safe website"
      ],

      explanation: "Target A appears safe based on current analysis.",

      incidentResponse: [
        "No action required"
      ]
    },

    b: {
      target: targetB || "No Target",

      type: typeB || "url",

      riskScore: 89,

      riskLevel: "high_risk",

      findings: [
        "Suspicious domain detected",
        "Possible phishing attempt"
      ],

      explanation: "Target B shows phishing indicators and suspicious behavior.",

      incidentResponse: [
        "Avoid visiting the website",
        "Block the domain",
        "Report to security team"
      ]
    },

    summary: "Target B is significantly more dangerous than Target A.",

    winner: "b"
  });

});

module.exports = router;