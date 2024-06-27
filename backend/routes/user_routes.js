const express = require("express");

const user_controllers = require("../controllers/user_controller");
const { require_auth } = require("../middleware/auth");

const router = express.Router();

//login page route
router.post("/api/login", user_controllers.login_user);
// change password
router
  .route("/api/changePassword")
  .put(require_auth, user_controllers.change_password);

//register page route
router.post("/api/register", user_controllers.register_user);

router.post("/api/forgetpassword", user_controllers.forgetPassword);
router.post("/api/EmailSubscription", user_controllers.EmailSubscription);
router.put("/api/changePasswordVerification", user_controllers.changePasswordVerification);
router.put("/api/checkVerfiedCode", user_controllers.checkVerfiedCode);
router.put("/api/sendVerificationCode", user_controllers.sendVerificationCode);
router.get("/api/getUserByEmail/:email", user_controllers.getUserByEmail);

//update user profile route
router.put("/api/update-profile", user_controllers.update_user_profile);

// get user subscriptions route
router
  .route("/api/subscriptions")
  .get(require_auth, user_controllers.get_user_subscriptions);
router
  .route("/api/orders")
  .get(require_auth, user_controllers.get_all_orders);

// create new subscription
router.route("/api/subscriptions").post(require_auth, user_controllers.create_user_subscriptions);

// update subscription
router.put(
  "/api/subscriptions/:id",
  user_controllers.update_user_subscriptions
);

// delete subscription
router.route("/api/subscriptions").delete(require_auth, user_controllers.delete_user_subscriptions);

module.exports = router;
