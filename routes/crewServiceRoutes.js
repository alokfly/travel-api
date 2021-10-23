const app = require("express");
const router = app.Router();
const { viewCrewService } = require("../controllers/crewServiceController");

router.get("/viewCrewService", viewCrewService);

module.exports = router;
