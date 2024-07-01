const { initiateKYC } = require("../utils/smileIdService");

exports.initiateSmileId = async (req, res) => {
  const { userId, userImage, userInfo } = req.body;

  try {
    const kycResult = await initiateKYC(userId, userImage, userInfo);
    res.json(kycResult);
  } catch (error) {
    res.status(500).json({ error: "KYC initiation failed" });
  }
};

exports.kycCallback = async (req, res) => {
  const kycResult = req.body;

  const userId = kycResult.user_id;
  const verificationStatus = kycResult.verification_status;

  try {
    await User.update(
      { verified: verificationStatus === "verified" },
      { where: { id: userId } }
    );

    res.status(200).send("KYC result processed");
  } catch (error) {
    console.error("Error processing KYC result:", error);
    res.status(500).send("Error processing KYC result");
  }
};
