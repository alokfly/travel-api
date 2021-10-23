const app = require("express");
const router = app.Router();
const { addNewFeature } = require("../controllers/newFeatureController");

router.post("/newFeature", addNewFeature);

module.exports = router;
