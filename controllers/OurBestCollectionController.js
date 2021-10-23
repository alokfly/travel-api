const OurBestCollection = require("../models/OurBestCollection");

module.exports.viewOurBestCollection = async (req, res) => {
  try {
    const response = await OurBestCollection.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
