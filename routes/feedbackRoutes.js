const app = require("express");
const router = app.Router();
const { addFeedback } = require("../controllers/feedbackController");

router.post("/addFeedback", addFeedback);

module.exports = router;
