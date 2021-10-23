const app = require("express");
const router = app.Router();
const { viewCaravanning } = require("../controllers/CaravanningController");

router.get("/viewCaravanning", viewCaravanning);

module.exports = router;
