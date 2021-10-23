const app = require("express");
const router = app.Router();
const {
  register,
  registerValiations,
  login,
  loginValiations,
  emailSend,
  changePassword,
} = require("../controllers/userController");
router.post("/register", registerValiations, register);
router.post("/login", loginValiations, login);
router.post("/email-send", emailSend);
router.post("/change-password", changePassword);
module.exports = router;
