const app = require("express");
const router = app.Router();
const { viewMaximizeTrip } = require("../controllers/maximizeTripController");

router.get("/viewMaximizeTrip", viewMaximizeTrip);

module.exports = router;
