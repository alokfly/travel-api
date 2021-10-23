const { model, Schema } = require("mongoose");
const newFeatureSchema = new Schema(
  {
    newFeature: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("newFeature", newFeatureSchema);
