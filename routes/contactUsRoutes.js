const app = require("express");
const router = app.Router();
const { viewContactUs } = require("../controllers/ContactUsController");

router.get("/viewContactUs", viewContactUs);

module.exports = router;
