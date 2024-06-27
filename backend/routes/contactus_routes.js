const express = require("express");
const contactus_controller = require("../controllers/contactus_controller");
const router = express.Router();
//get contactus users route
router.get("/api/contactus", contactus_controller.get_all_contactUs);

//register contactus users page route
router.post("/api/createContactUs", contactus_controller.createContact);

module.exports = router;
