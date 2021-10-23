const app = require("express");
const router = app.Router();
const { viewTripDetail } = require("../controllers/tripDetailController");

router.get("/viewTripDetail", viewTripDetail);

module.exports = router;
