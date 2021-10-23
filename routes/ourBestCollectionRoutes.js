const app = require("express");
const router = app.Router();
const {
  viewOurBestCollection,
} = require("../controllers/OurBestCollectionController");

router.get("/viewOurBestCollection", viewOurBestCollection);

module.exports = router;
