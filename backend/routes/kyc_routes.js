/api/initiate-kyc

const kyc_controllers = require("../controllers/kyc_controller");
const { require_auth } = require("../middleware/auth");

const router = express.Router();

router.post("/api/initiate-kyc", kyc_controllers.initiateSmileId);
router.post("/api/kyc-callback", kyc_controllers.kycCallback);