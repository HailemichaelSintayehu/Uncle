const express = require('express')
const kyc_controllers = require("../controllers/kyc_controller");
const router = express.Router();

router.post("/api/verify-account", kyc_controllers.initiateSmileId);

module.exports = router;