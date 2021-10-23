const ContactUs = require("../models/ContactUs");

module.exports.viewContactUs = async (req, res) => {
  try {
    const response = await ContactUs.find();
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
