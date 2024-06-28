const twilio = require("twilio");
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

sendVerificationCode = async (req, res) => {
  const { phoneNumber } = req.body;
  console.log(phoneNumber, 'phone number')
  try {
    const verification = await twilioClient.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verifications.create({ to: phoneNumber, channel: "sms" });
    res
      .status(200)
      .send({
        success: true,
        message: "Verification code sent successfully",
        verification,
      });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: "Error sending verification code",
        error,
      });
  }
};

const verifyCode = async (req, res) => {
  const { phoneNumber, code } = req.body;

  try {
    const verificationCheck = await twilioClient.verify
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: phoneNumber, code });

    if (verificationCheck.status === "approved") {
      res
        .status(200)
        .send({ success: true, message: "Phone number verified successfully" });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Invalid verification code" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Error verifying code", error });
  }
};

module.exports = {
  sendVerificationCode,
  verifyCode,
};
