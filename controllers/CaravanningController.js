const Caravanning = require("../models/Caravanning");

module.exports.viewCaravanning = async (req, res) => {
  try {
    const response = await Caravanning.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
