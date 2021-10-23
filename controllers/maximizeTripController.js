const MaximizeTrip = require("../models/MaximizeYourTrip");

module.exports.viewMaximizeTrip = async (req, res) => {
  try {
    const response = await MaximizeTrip.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
