const BestCollection = require("../models/OurbestCollection");

module.exports.viewBestCollection = async (req, res) => {
  try {
    const response = await BestCollection.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
