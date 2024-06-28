const express = require("express");
const phone_verification = require("../controllers/phone_verification_controller");

const router = express.Router();
router.post("/api/phone-verification/send-verification-code", phone_verification.sendVerificationCode);
router.post("/api/phone-verification/verify-code", phone_verification.verifyCode);

module.exports = router;