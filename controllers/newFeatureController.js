const { body, validationResult } = require("express-validator");
const NewFeature = require("../models/NewFeatures");

module.exports.addNewFeature = async (req, res) => {
  const { newFeature } = req.body;
  try {
    const feature = await NewFeature.create({
      newFeature,
    });
    return res.status(200).json({ msg: "New Feature saved successfully" });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
