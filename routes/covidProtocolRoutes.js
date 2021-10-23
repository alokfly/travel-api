const app = require("express");
const router = app.Router();
const { viewCovidProtocol } = require("../controllers/covidProtocolController");

router.get("/viewCovidProtocol", viewCovidProtocol);

module.exports = router;
