const express = require('express')
const kyc_controllers = require("../controllers/kyc_controller");
const router = express.Router();

router.post("/api/initiate-kyc", kyc_controllers.initiateSmileId);

module.exports = router;