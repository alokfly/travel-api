const { body, validationResult } = require("express-validator");
const TripDetail = require("../models/TripDetail");

module.exports.viewTripDetail = async (req, res) => {
  try {
    const response = await TripDetail.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
