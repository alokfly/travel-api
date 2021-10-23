const { body, validationResult } = require("express-validator");
const FAQ = require("../models/FAQ");

module.exports.viewFaq = async (req, res) => {
  try {
    const response = await FAQ.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
