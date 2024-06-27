const express = require("express");
const { require_auth } = require("../middleware/auth");

const appliance_controller = require("../controllers/appliance_controller");
const checkout_controller = require("../controllers/checkout_controller");

const router = express.Router();

// route to search for an appliance
router.get("/api/appliances/search", appliance_controller.search_for_appliance);

// get appliance by Id
router.get("/api/appliances/:id", appliance_controller.get_appliance_ById);

// get all appliances
router.get("/api/appliances", appliance_controller.get_all_appliances);

// checkout method
router.route("/api/stripe/checkout").post(require_auth, checkout_controller.checkout_cart);

module.exports = router;
