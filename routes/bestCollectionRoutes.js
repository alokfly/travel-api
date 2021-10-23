const app = require("express");
const router = app.Router();
const {
  viewBestCollection,
} = require("../controllers/bestCollectionController");

router.get("/viewBestCollection", viewBestCollection);

module.exports = router;
