exports.scanUrl = (req, res) => {

  const { url } = req.body;

  let risk = "Low";

  if (
    url.includes("login") ||
    url.includes("verify") ||
    url.includes("bank")
  ) {
    risk = "High";
  }

  res.json({
    message: "URL scanned successfully",
    scannedUrl: url,
    risk: risk
  });

};