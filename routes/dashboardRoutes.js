const express = require("express");

const router = express.Router();

router.get("/stats", (req, res) => {
  res.json({
    totalScans: 25,
    scansThisWeek: 7,
    highRiskCount: 3,
    suspiciousCount: 5,
    safeCount: 17,
    urlScans: 18,
    emailScans: 7
  });
});

router.get("/recent", (req, res) => {
  res.json([
    {
      id: 1,
      type: "url",
      target: "google.com",
      riskLevel: "safe",
      createdAt: new Date()
    },

    {
      id: 2,
      type: "email",
      target: "paypal-security@mail.com",
      riskLevel: "high_risk",
      createdAt: new Date()
    }
  ]);
});

router.get("/risk-breakdown", (req, res) => {
  res.json({
    safe: 17,
    suspicious: 5,
    high_risk: 3
  });
});

router.get("/trend", (req, res) => {
  res.json([
    {
      date: "2026-06-01",
      count: 5
    },

    {
      date: "2026-06-02",
      count: 8
    },

    {
      date: "2026-06-03",
      count: 4
    },

    {
      date: "2026-06-04",
      count: 6
    }
  ]);
});

router.get("/security-score", (req, res) => {
  res.json({
    score: 78,
    tier: "gold",
    threatsAvoided: 12,
    safeScans: 17,
    totalScans: 25
  });
});

router.get("/threat-categories", (req, res) => {
  res.json([
    {
      category: "Phishing",
      count: 5
    },

    {
      category: "Spam",
      count: 3
    },

    {
      category: "Malware",
      count: 2
    }
  ]);
});

router.get("/threat-feed", (req, res) => {
  res.json([
    {
      id: 1,
      type: "url",
      target: "fake-paypal-login.com",
      riskLevel: "high_risk",
      riskScore: 92,
      createdAt: new Date()
    },

    {
      id: 2,
      type: "email",
      target: "bank-alert@mail.com",
      riskLevel: "suspicious",
      riskScore: 61,
      createdAt: new Date()
    }
  ]);
});

module.exports = router;