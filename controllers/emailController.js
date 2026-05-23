exports.scanEmail = (req, res) => {

  const { emailText } = req.body;

  let risk = "Low";

  if (
    emailText.includes("urgent") ||
    emailText.includes("verify") ||
    emailText.includes("bank") ||
    emailText.includes("password")
  ) {
    risk = "High";
  }

  res.json({
    message: "Email scanned successfully",
    email: emailText,
    risk: risk
  });

};