const { body, validationResult } = require("express-validator");
const CovidProtocol = require("../models/CovidProtocol");

module.exports.viewCovidProtocol = async (req, res) => {
  try {
    const response = await CovidProtocol.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
