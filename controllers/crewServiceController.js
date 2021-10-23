const { body, validationResult } = require("express-validator");
const CrewService = require("../models/CrewService");

module.exports.viewCrewService = async (req, res) => {
  try {
    const response = await CrewService.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
