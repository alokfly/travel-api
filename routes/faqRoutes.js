const app = require("express");
const router = app.Router();
const { viewFaq } = require("../controllers/faqController");

router.get("/viewFAQ", viewFaq);

module.exports = router;
